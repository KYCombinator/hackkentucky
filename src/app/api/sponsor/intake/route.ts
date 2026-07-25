import { NextRequest, NextResponse } from "next/server"
import { SESClient, SendRawEmailCommand } from "@aws-sdk/client-ses"

// Route handler must run on the Node.js runtime (SES SDK + Buffer).
export const runtime = "nodejs"

const TO_EMAIL = process.env.SPONSOR_TO_EMAIL || "hackkentucky@kycombinator.com"
const FROM_EMAIL = process.env.SPONSOR_FROM_EMAIL || "hackkentucky@kycombinator.com"

const ses = new SESClient({ region: process.env.AWS_REGION || "us-east-1" })

// Keep well under the Lambda ~6MB request limit (multipart adds overhead).
const MAX_BYTES = 4 * 1024 * 1024

const ALLOWED: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clean(value: FormDataEntryValue | null, max = 2000): string {
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

// Verify the bytes actually match an image of the claimed type — don't trust
// the browser-supplied content-type alone.
function sniff(buf: Buffer, mime: string): boolean {
  if (mime === "image/png") return buf.length > 8 && buf.toString("hex", 0, 8) === "89504e470d0a1a0a"
  if (mime === "image/jpeg") return buf.length > 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff
  if (mime === "image/gif") return buf.toString("ascii", 0, 6) === "GIF87a" || buf.toString("ascii", 0, 6) === "GIF89a"
  if (mime === "image/webp")
    return buf.length > 12 && buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP"
  if (mime === "image/svg+xml") {
    const head = buf.toString("utf8", 0, Math.min(buf.length, 1024)).trim().toLowerCase()
    return head.startsWith("<?xml") || head.startsWith("<svg")
  }
  return false
}

export async function POST(req: NextRequest) {
  let form: FormData
  try {
    form = await req.formData()
  } catch {
    return NextResponse.json({ error: "Invalid form submission." }, { status: 400 })
  }

  // Honeypot.
  if (clean(form.get("company_url"))) {
    return NextResponse.json({ ok: true })
  }

  const company = clean(form.get("company"), 160)
  const name = clean(form.get("name"), 120)
  const email = clean(form.get("email"), 200)
  const website = clean(form.get("website"), 300)
  const tier = clean(form.get("tier"), 40)
  const notes = clean(form.get("notes"), 4000)
  const file = form.get("logo")

  if (!company) return NextResponse.json({ error: "Please enter your organization name." }, { status: 400 })
  if (!name) return NextResponse.json({ error: "Please enter a contact name." }, { status: 400 })
  if (!EMAIL_RE.test(email)) return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 })
  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Please attach your logo." }, { status: 400 })
  }

  const mime = file.type
  if (!ALLOWED[mime]) {
    return NextResponse.json(
      { error: "Logo must be a PNG, JPG, SVG, WEBP, or GIF image." },
      { status: 415 },
    )
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Logo must be 4 MB or smaller." }, { status: 413 })
  }

  const bytes = Buffer.from(await file.arrayBuffer())
  if (!sniff(bytes, mime)) {
    return NextResponse.json({ error: "That file doesn't look like a valid image." }, { status: 415 })
  }

  const ext = ALLOWED[mime]
  const safeCompany = company.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase() || "sponsor"
  const filename = `${safeCompany}-logo.${ext}`

  const rows: [string, string][] = [
    ["Organization", company],
    ["Contact", name],
    ["Email", email],
    ["Website", website || "—"],
    ["Tier", tier || "—"],
    ["Logo", `${filename} (${(file.size / 1024).toFixed(0)} KB, ${mime})`],
    ["Notes", notes || "—"],
  ]

  const htmlRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 16px 6px 0;font-weight:700;vertical-align:top">${escapeHtml(k)}</td><td style="padding:6px 0;white-space:pre-wrap">${escapeHtml(v)}</td></tr>`,
    )
    .join("")
  const html = `<div style="font-family:ui-monospace,Menlo,monospace;font-size:14px;color:#0b0b0b">
      <h2 style="margin:0 0 16px">HackKentucky Fall 2026 — sponsor logo intake</h2>
      <table style="border-collapse:collapse">${htmlRows}</table>
      <p style="margin:16px 0 0;color:#555">Logo attached to this email.</p>
    </div>`

  // Build a multipart/mixed MIME message so the logo rides along as an attachment.
  const boundary = `----hk_${Date.now().toString(36)}_${Math.random().toString(36).slice(2)}`
  const b64 = bytes.toString("base64").replace(/(.{76})/g, "$1\r\n")
  const subject = `[HackKentucky 2026] Logo intake — ${company}`

  const raw =
    `From: ${FROM_EMAIL}\r\n` +
    `To: ${TO_EMAIL}\r\n` +
    `Reply-To: ${email}\r\n` +
    `Subject: ${subject}\r\n` +
    `MIME-Version: 1.0\r\n` +
    `Content-Type: multipart/mixed; boundary="${boundary}"\r\n\r\n` +
    `--${boundary}\r\n` +
    `Content-Type: text/html; charset=UTF-8\r\n` +
    `Content-Transfer-Encoding: 7bit\r\n\r\n` +
    `${html}\r\n\r\n` +
    `--${boundary}\r\n` +
    `Content-Type: ${mime}; name="${filename}"\r\n` +
    `Content-Transfer-Encoding: base64\r\n` +
    `Content-Disposition: attachment; filename="${filename}"\r\n\r\n` +
    `${b64}\r\n\r\n` +
    `--${boundary}--\r\n`

  try {
    await ses.send(new SendRawEmailCommand({ RawMessage: { Data: Buffer.from(raw) } }))
  } catch (err) {
    console.error("SES raw send failed", err)
    return NextResponse.json(
      { error: "We couldn't submit your logo. Please email hackkentucky@kycombinator.com directly." },
      { status: 502 },
    )
  }

  return NextResponse.json({ ok: true })
}
