import { NextRequest, NextResponse } from "next/server"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

// Route handler must run on the Node.js runtime (SES SDK is not edge-compatible).
export const runtime = "nodejs"

const TO_EMAIL = process.env.SPONSOR_TO_EMAIL || "hackkentucky@kycombinator.com"
// Must be a verified SES identity in the account (see sst.config.ts / README).
const FROM_EMAIL = process.env.SPONSOR_FROM_EMAIL || "hackkentucky@kycombinator.com"

const INTERESTS = ["sponsor", "volunteer", "speak"] as const
type Interest = (typeof INTERESTS)[number]

const TIERS = ["community", "neon", "chrome", "purple", "bounty", "custom", ""] as const

const ses = new SESClient({ region: process.env.AWS_REGION || "us-east-1" })

function clean(value: unknown, max = 2000): string {
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

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 })
  }

  // Honeypot: real users never fill this hidden field.
  if (clean(body.company_url)) {
    return NextResponse.json({ ok: true })
  }

  const interest = clean(body.interest, 20).toLowerCase() as Interest
  const name = clean(body.name, 120)
  const email = clean(body.email, 200)
  const organization = clean(body.organization, 160)
  const tier = clean(body.tier, 20).toLowerCase()
  const message = clean(body.message, 4000)

  if (!INTERESTS.includes(interest)) {
    return NextResponse.json({ error: "Please choose how you'd like to get involved." }, { status: 400 })
  }
  if (!name) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 })
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  }
  if (!message) {
    return NextResponse.json({ error: "Please add a short note so we know how to help." }, { status: 400 })
  }

  const interestLabel: Record<Interest, string> = {
    sponsor: "Sponsor",
    volunteer: "Volunteer",
    speak: "Speak",
  }

  const tierLabel = TIERS.includes(tier as (typeof TIERS)[number]) && tier ? tier.toUpperCase() : ""

  const rows: [string, string][] = [
    ["Interest", interestLabel[interest]],
    ["Name", name],
    ["Email", email],
    ["Organization", organization || "—"],
  ]
  if (interest === "sponsor") rows.push(["Tier / bounty", tierLabel || "—"])
  rows.push(["Message", message])

  const textBody = rows.map(([k, v]) => `${k}: ${v}`).join("\n")
  const htmlBody = `
    <div style="font-family:ui-monospace,Menlo,monospace;font-size:14px;color:#0b0b0b">
      <h2 style="margin:0 0 16px">HackKentucky Fall 2026 — ${escapeHtml(interestLabel[interest])} inquiry</h2>
      <table style="border-collapse:collapse">
        ${rows
          .map(
            ([k, v]) =>
              `<tr>
                <td style="padding:6px 16px 6px 0;vertical-align:top;font-weight:700">${escapeHtml(k)}</td>
                <td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td>
              </tr>`,
          )
          .join("")}
      </table>
    </div>`

  try {
    await ses.send(
      new SendEmailCommand({
        Source: FROM_EMAIL,
        Destination: { ToAddresses: [TO_EMAIL] },
        ReplyToAddresses: [email],
        Message: {
          Subject: {
            Charset: "UTF-8",
            Data: `[HackKentucky 2026] ${interestLabel[interest]} — ${organization || name}`,
          },
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

  // Best-effort confirmation to the person who filled out the form. A failure
  // here must not fail the request — the organizers already got the inquiry.
  const firstName = name.split(" ")[0] || "there"
  const nextStep: Record<Interest, string> = {
    sponsor:
      "We'll follow up to talk tiers, bounties, or a custom package. Sponsoring? Commit by August 14 to make the participant t-shirt.",
    volunteer: "We'll follow up about how you can help run the weekend on-site.",
    speak: "We'll follow up about your Learn-a-thon track or guest talk.",
  }

  const confirmText = [
    `Hi ${firstName},`,
    "",
    `Thanks for reaching out about HackKentucky × HackTheTrack — Fall 2026. We got your ${interestLabel[interest].toLowerCase()} inquiry and a HackKentucky organizer will be in touch within a couple of days.`,
    "",
    nextStep[interest],
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

  const confirmHtml = `
    <div style="font-family:ui-monospace,Menlo,monospace;font-size:14px;color:#0b0b0b;line-height:1.7">
      <p style="margin:0 0 16px">Hi ${escapeHtml(firstName)},</p>
      <p style="margin:0 0 16px">
        Thanks for reaching out about <strong>HackKentucky × HackTheTrack — Fall 2026</strong>. We got your
        ${escapeHtml(interestLabel[interest].toLowerCase())} inquiry and a HackKentucky organizer will be in touch
        within a couple of days.
      </p>
      <p style="margin:0 0 16px">${escapeHtml(nextStep[interest])}</p>
      <p style="margin:0 0 8px;font-weight:700">Here's a copy of what you sent:</p>
      ${htmlBody}
      <p style="margin:16px 0 0;color:#555">
        September 11–12, 2026 · Genuine Works, 750 E Jefferson St, Louisville, KY<br />
        <a href="https://hackkentucky.com">hackkentucky.com</a> ·
        <a href="https://hackthetrack.org">hackthetrack.org</a>
      </p>
      <p style="margin:16px 0 0">
        — The HackKentucky Team<br />
        <span style="color:#555">Reply to this email or reach us at hackkentucky@kycombinator.com</span>
      </p>
    </div>`

  try {
    await ses.send(
      new SendEmailCommand({
        Source: FROM_EMAIL,
        Destination: { ToAddresses: [email] },
        ReplyToAddresses: [TO_EMAIL],
        Message: {
          Subject: {
            Charset: "UTF-8",
            Data: "Thanks — we got your HackKentucky Fall 2026 inquiry",
          },
          Body: {
            Text: { Charset: "UTF-8", Data: confirmText },
            Html: { Charset: "UTF-8", Data: confirmHtml },
          },
        },
      }),
    )
  } catch (err) {
    // Log only — the inquiry reached the organizers, which is what matters.
    console.error("SES confirmation send failed", err)
  }

  return NextResponse.json({ ok: true })
}
