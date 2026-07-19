import { NextRequest, NextResponse } from "next/server"
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses"

// Route handler must run on the Node.js runtime (SES SDK is not edge-compatible).
export const runtime = "nodejs"

const TO_EMAIL = process.env.SPONSOR_TO_EMAIL || "organizers@kycombinator.com"
// Must be a verified SES identity in the account (see sst.config.ts / README).
const FROM_EMAIL = process.env.SPONSOR_FROM_EMAIL || "organizers@kycombinator.com"

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
      { error: "We couldn't send your message. Please email organizers@kycombinator.com directly." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
