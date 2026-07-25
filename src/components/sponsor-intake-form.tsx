"use client"

import { useRef, useState } from "react"

const MAX_BYTES = 4 * 1024 * 1024
const ACCEPT = ["image/png", "image/jpeg", "image/webp", "image/gif", "image/svg+xml"]
const ACCEPT_ATTR = ".png,.jpg,.jpeg,.webp,.gif,.svg"

const TIERS = ["Community", "Neon", "Chrome", "Purple", "Bounty", "Custom / TBD"]

const inputClass =
  "w-full border border-[rgba(242,242,236,.2)] bg-[#0b0b0b] px-4 py-3 text-[14px] text-[#f2f2ec] outline-none transition-colors placeholder:text-[rgba(242,242,236,.35)] focus:border-[#c9f73b]"
const labelClass = "mb-2 block text-[11px] font-bold tracking-[2px] text-[rgba(242,242,236,.65)]"

// Validate the file client-side before upload: type, size, and — for raster
// images — that it actually decodes.
function validateImage(file: File): Promise<string | null> {
  return new Promise((resolve) => {
    if (!ACCEPT.includes(file.type)) {
      resolve("Logo must be a PNG, JPG, SVG, WEBP, or GIF.")
      return
    }
    if (file.size > MAX_BYTES) {
      resolve("Logo must be 4 MB or smaller.")
      return
    }
    if (file.type === "image/svg+xml") {
      resolve(null) // SVGs don't decode via Image() reliably; server sniffs them.
      return
    }
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      if (img.naturalWidth < 1 || img.naturalHeight < 1) resolve("That image looks empty or corrupted.")
      else resolve(null)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      resolve("That file couldn't be read as an image.")
    }
    img.src = url
  })
}

export function SponsorIntakeForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")
  const [preview, setPreview] = useState<{ url: string; name: string; size: string; dims?: string } | null>(null)
  const [fileError, setFileError] = useState("")
  const fileRef = useRef<HTMLInputElement>(null)

  async function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFileError("")
    setPreview(null)
    const file = e.target.files?.[0]
    if (!file) return

    const err = await validateImage(file)
    if (err) {
      setFileError(err)
      if (fileRef.current) fileRef.current.value = ""
      return
    }

    const url = URL.createObjectURL(file)
    const info = {
      url,
      name: file.name,
      size: file.size < 1024 * 1024 ? `${(file.size / 1024).toFixed(0)} KB` : `${(file.size / 1024 / 1024).toFixed(1)} MB`,
    }
    if (file.type === "image/svg+xml") {
      setPreview(info)
    } else {
      const img = new Image()
      img.onload = () => setPreview({ ...info, dims: `${img.naturalWidth}×${img.naturalHeight}` })
      img.src = url
    }
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "sending") return
    if (fileError) return
    setStatus("sending")
    setError("")

    const form = e.currentTarget
    try {
      const res = await fetch("/api/sponsor/intake", { method: "POST", body: new FormData(form) })
      if (!res.ok) {
        const json = await res.json().catch(() => ({}))
        throw new Error(json.error || "Something went wrong. Please try again.")
      }
      setStatus("sent")
      form.reset()
      setPreview(null)
    } catch (err) {
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "sent") {
    return (
      <div className="border border-[#c9f73b] p-8 sm:p-10">
        <div className="mb-4 text-[11px] font-bold tracking-[3px] text-[#c9f73b]">▚ LOGO RECEIVED</div>
        <h3 className="m-0 font-[family-name:var(--font-hk-display)] text-[28px] font-bold tracking-[-1px] text-[#f2f2ec] sm:text-[36px]">
          Got it — thank you.
        </h3>
        <p className="mb-0 mt-4 max-w-[520px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          Your logo and details are with the organizing team. We&apos;ll reach out if we need a different format or
          resolution for print.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 inline-block border border-[rgba(242,242,236,.5)] px-[9px] py-1 text-[12px] tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
        >
          SUBMIT ANOTHER →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[rgba(242,242,236,.12)] p-6 sm:p-9">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className={labelClass}>
            ORGANIZATION *
          </label>
          <input id="company" name="company" required autoComplete="organization" className={inputClass} placeholder="Acme Inc." />
        </div>
        <div>
          <label htmlFor="name" className={labelClass}>
            CONTACT NAME *
          </label>
          <input id="name" name="name" required autoComplete="name" className={inputClass} placeholder="Jane Builder" />
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            EMAIL *
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClass} placeholder="jane@acme.com" />
        </div>
        <div>
          <label htmlFor="website" className={labelClass}>
            WEBSITE
          </label>
          <input id="website" name="website" type="url" autoComplete="url" className={inputClass} placeholder="https://acme.com" />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="tier" className={labelClass}>
          SPONSORSHIP TIER
        </label>
        <select id="tier" name="tier" defaultValue="" className={`${inputClass} appearance-none`}>
          <option value="" className="bg-[#0b0b0b]">
            SELECT A TIER
          </option>
          {TIERS.map((t) => (
            <option key={t} value={t} className="bg-[#0b0b0b]">
              {t.toUpperCase()}
            </option>
          ))}
        </select>
      </div>

      {/* logo upload */}
      <div className="mt-5">
        <label htmlFor="logo" className={labelClass}>
          LOGO * <span className="font-normal text-[rgba(242,242,236,.45)]">— PNG, JPG, SVG, WEBP, or GIF · max 4 MB · vector or ≥1000px preferred</span>
        </label>
        <input
          ref={fileRef}
          id="logo"
          name="logo"
          type="file"
          required
          accept={ACCEPT_ATTR}
          onChange={onFileChange}
          className="block w-full text-[13px] text-[rgba(242,242,236,.6)] file:mr-4 file:cursor-pointer file:border file:border-[rgba(242,242,236,.4)] file:bg-transparent file:px-4 file:py-2 file:text-[12px] file:font-bold file:tracking-[1px] file:text-[#f2f2ec] hover:file:border-[#c9f73b] hover:file:text-[#c9f73b]"
        />
        {fileError ? (
          <p className="mt-3 border border-[#ff6b6b] px-4 py-2 text-[12px] leading-[1.6] text-[#ff9b9b]">{fileError}</p>
        ) : null}
        {preview ? (
          <div className="mt-4 flex items-center gap-4 border border-[rgba(201,247,59,.4)] p-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview.url}
              alt="Logo preview"
              className="h-16 w-16 shrink-0 border border-[rgba(242,242,236,.15)] object-contain"
              style={{ background: "repeating-conic-gradient(#1a1a1a 0% 25%, #111 0% 50%) 50% / 12px 12px" }}
            />
            <div className="min-w-0 text-[12px] leading-[1.7] text-[rgba(242,242,236,.65)]">
              <div className="truncate font-bold text-[#f2f2ec]">{preview.name}</div>
              <div>
                {preview.size}
                {preview.dims ? ` · ${preview.dims}` : ""}
                <span className="ml-2 text-[#c9f73b]">✓ valid image</span>
              </div>
            </div>
          </div>
        ) : null}
      </div>

      <div className="mt-5">
        <label htmlFor="notes" className={labelClass}>
          NOTES
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          className={`${inputClass} resize-y`}
          placeholder="Anything we should know — preferred logo variant, brand colors, print constraints…"
        />
      </div>

      {/* honeypot */}
      <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden>
        <label htmlFor="company_url">Leave this field empty</label>
        <input id="company_url" name="company_url" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p className="mt-5 border border-[#ff6b6b] px-4 py-3 text-[12px] leading-[1.6] text-[#ff9b9b]">{error}</p>
      ) : null}

      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-[#c9f73b] px-8 py-4 text-[14px] font-bold tracking-[2px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "UPLOADING…" : "SUBMIT LOGO →"}
        </button>
        <span className="text-[11px] leading-[1.7] tracking-[1px] text-[rgba(242,242,236,.45)]">
          GOES TO HACKKENTUCKY@KYCOMBINATOR.COM
        </span>
      </div>
    </form>
  )
}
