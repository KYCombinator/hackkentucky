import { NextRequest, NextResponse } from "next/server"
import { SESClient, SendEmailCommand, SendRawEmailCommand } from "@aws-sdk/client-ses"
import { TRACKS, TRACK_KEYS, type Track } from "@/lib/involvement"
import { LOGO_EXT, LOGO_MAX_BYTES, sniffImage } from "@/lib/logo"

export const runtime = "nodejs"

const TO_EMAIL = process.env.SPONSOR_TO_EMAIL || "hackkentucky@kycombinator.com"
const FROM_EMAIL = process.env.SPONSOR_FROM_EMAIL || "hackkentucky@kycombinator.com"

const ses = new SESClient({ region: process.env.AWS_REGION || "us-east-1" })
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: FormDataEntryValue | null, max = 4000): string {
  return typeof value === "string" ? value.trim().slice(0, max) : ""
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export async function POST(req: NextRequest) {
  let form: FormData
  try {
    form = await req.formData()
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 })
  }

  // Honeypot.
  if (clean(form.get("company_url"))) return NextResponse.json({ ok: true })

  const track = clean(form.get("involvementTrack"), 20).toLowerCase() as Track
  if (!TRACK_KEYS.includes(track)) {
    return NextResponse.json({ error: "Please choose how you'd like to get involved." }, { status: 400 })
  }
  const def = TRACKS[track]

  const collected: [string, string][] = []
  let logo: File | null = null

  for (const field of def.fields) {
    if (field.type === "file") {
      const f = form.get(field.key)
      if (f instanceof File && f.size > 0) logo = f // optional
      continue
    }
    const val = clean(form.get(field.key))
    if (field.required && !val) {
      return NextResponse.json({ error: `Please fill in "${field.label}".` }, { status: 400 })
    }
    if (field.key === "email" && val && !EMAIL_RE.test(val)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }
    if (val) collected.push([field.label, val])
  }

  const name = clean(form.get("name"), 120) || "there"
  const email = clean(form.get("email"), 200)
  const org = clean(form.get("organization"), 160)
  const subjectWho = org || name

  // Validate the optional logo (bytes, not just the browser-supplied type).
  let logoBytes: Buffer | null = null
  let logoName = ""
  let logoMime = ""
  if (logo) {
    logoMime = logo.type
    if (!LOGO_EXT[logoMime]) {
      return NextResponse.json({ error: "Logo must be a PNG, JPG, SVG, WEBP, or GIF image." }, { status: 415 })
    }
    if (logo.size > LOGO_MAX_BYTES) {
      return NextResponse.json({ error: "Logo must be 4 MB or smaller." }, { status: 413 })
    }
    logoBytes = Buffer.from(await logo.arrayBuffer())
    if (!sniffImage(logoBytes, logoMime)) {
      return NextResponse.json({ error: "That logo doesn't look like a valid image." }, { status: 415 })
    }
    const safe = (org || name).replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "logo"
    logoName = `${safe}-logo.${LOGO_EXT[logoMime]}`
    collected.push(["Logo", `${logoName} (${(logo.size / 1024).toFixed(0)} KB) — attached`])
  }

  const textBody = collected.map(([k, v]) => `${k}: ${v}`).join("\n")
  const htmlRows = collected
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;font-weight:700;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("")
  const htmlBody = `<div style="font-family:ui-monospace,Menlo,monospace;font-size:14px;color:#0b0b0b">
      <h2 style="margin:0 0 16px">HackKentucky Fall 2026 — ${escapeHtml(def.label)} inquiry</h2>
      <table style="border-collapse:collapse">${htmlRows}</table>${logoBytes ? '<p style="margin:16px 0 0;color:#555">Logo attached to this email.</p>' : ""}
    </div>`

  const subject = `[HackKentucky 2026] ${def.label} — ${subjectWho}`

  try {
    if (logoBytes) {
      // multipart/mixed so the logo rides along as an attachment
      const boundary = `----hk_${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`
      const b64 = logoBytes.toString("base64").replace(/(.{76})/g, "$1\r\n")
      const raw =
        `From: ${FROM_EMAIL}\r\n` +
        `To: ${TO_EMAIL}\r\n` +
        (email ? `Reply-To: ${email}\r\n` : "") +
        `Subject: ${subject}\r\n` +
        `MIME-Version: 1.0\r\n` +
        `Content-Type: multipart/mixed; boundary="${boundary}"\r\n\r\n` +
        `--${boundary}\r\n` +
        `Content-Type: text/html; charset=UTF-8\r\n` +
        `Content-Transfer-Encoding: 7bit\r\n\r\n` +
        `${htmlBody}\r\n\r\n` +
        `--${boundary}\r\n` +
        `Content-Type: ${logoMime}; name="${logoName}"\r\n` +
        `Content-Transfer-Encoding: base64\r\n` +
        `Content-Disposition: attachment; filename="${logoName}"\r\n\r\n` +
        `${b64}\r\n\r\n` +
        `--${boundary}--\r\n`
      await ses.send(new SendRawEmailCommand({ RawMessage: { Data: Buffer.from(raw) } }))
    } else {
      await ses.send(
        new SendEmailCommand({
          Source: FROM_EMAIL,
          Destination: { ToAddresses: [TO_EMAIL] },
          ReplyToAddresses: email ? [email] : undefined,
          Message: {
            Subject: { Charset: "UTF-8", Data: subject },
            Body: {
              Text: { Charset: "UTF-8", Data: textBody },
              Html: { Charset: "UTF-8", Data: htmlBody },
            },
          },
        }),
      )
    }
  } catch (err) {
    console.error("SES send failed", err)
    return NextResponse.json(
      { error: "We couldn't send your message. Please email hackkentucky@kycombinator.com directly." },
      { status: 502 },
    )
  }

  // Best-effort confirmation to the submitter — never fails the request.
  if (email && EMAIL_RE.test(email)) {
    const firstName = name.split(" ")[0] || "there"
    const label = def.label.toLowerCase()
    const confirmText = [
      `Hi ${firstName},`,
      "",
      `Thanks for reaching out about HackKentucky × HackTheTrack — Fall 2026. We got your ${label} inquiry and an organizer will follow up within a couple of days.`,
      "",
      "Here's a copy of what you sent:",
      "",
      textBody,
      "",
      "September 11–12, 2026 · Genuine Works, 750 E Jefferson St, Louisville, KY",
      "hackkentucky.com · hackthetrack.org",
      "",
      "— The HackKentucky Team",
      "Reply to this email or reach us at hackkentucky@kycombinator.com",
    ].join("\n")
    const confirmHtml = `<div style="font-family:ui-monospace,Menlo,monospace;font-size:14px;color:#0b0b0b;line-height:1.7">
        <p style="margin:0 0 16px">Hi ${escapeHtml(firstName)},</p>
        <p style="margin:0 0 16px">Thanks for reaching out about <strong>HackKentucky × HackTheTrack — Fall 2026</strong>. We got your ${escapeHtml(label)} inquiry and an organizer will follow up within a couple of days.</p>
        <p style="margin:0 0 8px;font-weight:700">Here's a copy of what you sent:</p>
        ${htmlBody}
        <p style="margin:16px 0 0;color:#555">September 11–12, 2026 · Genuine Works, 750 E Jefferson St, Louisville, KY<br /><a href="https://hackkentucky.com">hackkentucky.com</a> · <a href="https://hackthetrack.org">hackthetrack.org</a></p>
        <p style="margin:16px 0 0">— The HackKentucky Team<br /><span style="color:#555">Reply to this email or reach us at hackkentucky@kycombinator.com</span></p>
      </div>`
    try {
      await ses.send(
        new SendEmailCommand({
          Source: FROM_EMAIL,
          Destination: { ToAddresses: [email] },
          ReplyToAddresses: [TO_EMAIL],
          Message: {
            Subject: { Charset: "UTF-8", Data: "Thanks — we got your HackKentucky Fall 2026 inquiry" },
            Body: {
              Text: { Charset: "UTF-8", Data: confirmText },
              Html: { Charset: "UTF-8", Data: confirmHtml },
            },
          },
        }),
      )
    } catch (err) {
      console.error("SES confirmation send failed", err)
    }
  }

  return NextResponse.json({ ok: true })
}
