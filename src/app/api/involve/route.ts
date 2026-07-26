import { NextRequest, NextResponse } from "next/server"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"
import { TRACKS, TRACK_KEYS, type Track } from "@/lib/involvement"

export const runtime = "nodejs"

const TO_EMAIL = process.env.SPONSOR_TO_EMAIL || "hackkentucky@kycombinator.com"
const FROM_EMAIL = process.env.SPONSOR_FROM_EMAIL || "hackkentucky@kycombinator.com"

const ses = new SESClient({ region: process.env.AWS_REGION || "us-east-1" })
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: unknown, max = 4000): string {
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
  let body: { track?: unknown; values?: Record<string, unknown>; company_url?: unknown }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  // Honeypot.
  if (clean(body.company_url)) return NextResponse.json({ ok: true })

  const track = clean(body.track, 20).toLowerCase() as Track
  if (!TRACK_KEYS.includes(track)) {
    return NextResponse.json({ error: "Please choose how you'd like to get involved." }, { status: 400 })
  }
  const def = TRACKS[track]
  const values = (body.values && typeof body.values === "object" ? body.values : {}) as Record<string, unknown>

  // Validate against the track's own schema.
  const collected: [string, string][] = []
  for (const field of def.fields) {
    const val = clean(values[field.key])
    if (field.required && !val) {
      return NextResponse.json({ error: `Please fill in "${field.label}".` }, { status: 400 })
    }
    if (field.key === "email" && val && !EMAIL_RE.test(val)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
    }
    if (val) collected.push([field.label, val])
  }

  const name = clean(values.name, 120) || "there"
  const email = clean(values.email, 200)
  const org = clean(values.organization, 160)
  const subjectWho = org || name

  const textBody = collected.map(([k, v]) => `${k}: ${v}`).join("\n")
  const htmlRows = collected
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;font-weight:700;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("")
  const htmlBody = `<div style="font-family:ui-monospace,Menlo,monospace;font-size:14px;color:#0b0b0b">
      <h2 style="margin:0 0 16px">HackKentucky Fall 2026 — ${escapeHtml(def.label)} inquiry</h2>
      <table style="border-collapse:collapse">${htmlRows}</table>
    </div>`

  try {
    await ses.send(
      new SendEmailCommand({
        Source: FROM_EMAIL,
        Destination: { ToAddresses: [TO_EMAIL] },
        ReplyToAddresses: email ? [email] : undefined,
        Message: {
          Subject: { Charset: "UTF-8", Data: `[HackKentucky 2026] ${def.label} — ${subjectWho}` },
          Body: {
            Text: { Charset: "UTF-8", Data: textBody },
            Html: { Charset: "UTF-8", Data: htmlBody },
          },
        },
      }),
    )
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
