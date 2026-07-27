"use client"

import { useRef, useState } from "react"
import { TRACKS, type Track } from "@/lib/involvement"
import { LOGO_ACCEPT_ATTR, LOGO_HINT, validateLogoFile } from "@/lib/logo"

const inputClass =
  "w-full border border-[rgba(242,242,236,.2)] bg-[#0b0b0b] px-4 py-3 text-[14px] text-[#f2f2ec] outline-none transition-colors placeholder:text-[rgba(242,242,236,.35)] focus:border-[#c9f73b]"
const labelClass = "mb-2 block text-[11px] font-bold tracking-[2px] text-[rgba(242,242,236,.65)]"

export function InvolvementForm({ track }: { track: Track }) {
  const def = TRACKS[track]
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [error, setError] = useState("")
  const [preview, setPreview] = useState<{ url: string; name: string; size: string } | null>(null)
  const [fileError, setFileError] = useState("")
  const fileRef = useRef<HTMLInputElement>(null)

  async function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFileError("")
    setPreview(null)
    const file = e.target.files?.[0]
    if (!file) return
    const err = await validateLogoFile(file)
    if (err) {
      setFileError(err)
      if (fileRef.current) fileRef.current.value = ""
      return
    }
    setPreview({
      url: URL.createObjectURL(file),
      name: file.name,
      size: file.size < 1024 * 1024 ? `${(file.size / 1024).toFixed(0)} KB` : `${(file.size / 1024 / 1024).toFixed(1)} MB`,
    })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "sending" || fileError) return
    setStatus("sending")
    setError("")

    const form = e.currentTarget
    const fd = new FormData(form) // includes all named inputs, the honeypot, and any file
    // Namespaced so it never collides with a track's own field key (e.g. Speak's "track" select).
    fd.append("involvementTrack", track)

    try {
      const res = await fetch("/api/involve", { method: "POST", body: fd })
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
      <div className="border border-[#c9f73b] p-7 sm:p-9">
        <div className="mb-3 text-[11px] font-bold tracking-[3px] text-[#c9f73b]">▚ MESSAGE SENT</div>
        <h3 className="m-0 font-[family-name:var(--font-hk-display)] text-[24px] font-bold tracking-[-1px] text-[#f2f2ec] sm:text-[30px]">
          Thanks — we&apos;ll be in touch.
        </h3>
        <p className="mb-0 mt-3 max-w-[520px] text-[13px] leading-[1.8] text-[rgba(242,242,236,.6)]">
          Your {def.label.toLowerCase()} note is on its way to hackkentucky@kycombinator.com. Expect a reply within a
          couple of days.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 inline-block border border-[rgba(242,242,236,.5)] px-[9px] py-1 text-[12px] tracking-[1px] text-[#f2f2ec] transition-colors hover:border-[#c9f73b] hover:text-[#c9f73b]"
        >
          SEND ANOTHER →
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="border border-[rgba(242,242,236,.12)] p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {def.fields.map((field) => {
          const full = !field.half || field.type === "textarea" || field.type === "file"
          return (
            <div key={field.key} className={full ? "sm:col-span-2" : ""}>
              <label htmlFor={`${track}-${field.key}`} className={labelClass}>
                {field.label.toUpperCase()}
                {field.required ? " *" : field.type === "file" ? " (OPTIONAL)" : ""}
                {field.type === "file" ? (
                  <span className="ml-1 font-normal text-[rgba(242,242,236,.45)]">— {LOGO_HINT}</span>
                ) : null}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={`${track}-${field.key}`}
                  name={field.key}
                  required={field.required}
                  rows={4}
                  placeholder={field.placeholder}
                  className={`${inputClass} resize-y`}
                />
              ) : field.type === "select" ? (
                <select
                  id={`${track}-${field.key}`}
                  name={field.key}
                  defaultValue={field.required ? "" : field.options?.[0] ?? ""}
                  required={field.required}
                  className={`${inputClass} appearance-none`}
                >
                  {field.required ? (
                    <option value="" className="bg-[#0b0b0b]">
                      SELECT…
                    </option>
                  ) : null}
                  {field.options?.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#0b0b0b]">
                      {opt}
                    </option>
                  ))}
                </select>
              ) : field.type === "file" ? (
                <>
                  <input
                    ref={fileRef}
                    id={`${track}-${field.key}`}
                    name={field.key}
                    type="file"
                    accept={LOGO_ACCEPT_ATTR}
                    onChange={onFileChange}
                    className="block w-full text-[13px] text-[rgba(242,242,236,.6)] file:mr-4 file:cursor-pointer file:border file:border-[rgba(242,242,236,.4)] file:bg-transparent file:px-4 file:py-2 file:text-[12px] file:font-bold file:tracking-[1px] file:text-[#f2f2ec] hover:file:border-[#c9f73b] hover:file:text-[#c9f73b]"
                  />
                  {fileError ? (
                    <p className="mt-3 border border-[#ff6b6b] px-4 py-2 text-[12px] leading-[1.6] text-[#ff9b9b]">{fileError}</p>
                  ) : null}
                  {preview ? (
                    <div className="mt-3 flex items-center gap-3 border border-[rgba(201,247,59,.4)] p-3">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={preview.url}
                        alt="Logo preview"
                        className="h-12 w-12 shrink-0 border border-[rgba(242,242,236,.15)] object-contain"
                        style={{ background: "repeating-conic-gradient(#1a1a1a 0% 25%, #111 0% 50%) 50% / 10px 10px" }}
                      />
                      <div className="min-w-0 text-[12px] leading-[1.6] text-[rgba(242,242,236,.65)]">
                        <div className="truncate font-bold text-[#f2f2ec]">{preview.name}</div>
                        <div>
                          {preview.size} <span className="ml-1 text-[#c9f73b]">✓ ready</span>
                        </div>
                      </div>
                    </div>
                  ) : null}
                </>
              ) : (
                <input
                  id={`${track}-${field.key}`}
                  name={field.key}
                  type={field.type}
                  required={field.required}
                  autoComplete={field.key === "email" ? "email" : field.key === "name" ? "name" : "off"}
                  placeholder={field.placeholder}
                  className={inputClass}
                />
              )}
            </div>
          )
        })}
      </div>

      {/* honeypot */}
      <div className="absolute left-[-9999px] top-[-9999px]" aria-hidden>
        <label htmlFor={`${track}-company_url`}>Leave this field empty</label>
        <input id={`${track}-company_url`} name="company_url" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p className="mt-5 border border-[#ff6b6b] px-4 py-3 text-[12px] leading-[1.6] text-[#ff9b9b]">{error}</p>
      ) : null}

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-[#c9f73b] px-7 py-3.5 text-[13px] font-bold tracking-[2px] text-[#0b0b0b] transition-colors hover:bg-[#f2f2ec] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "SENDING…" : def.cta}
        </button>
        <span className="text-[11px] leading-[1.7] tracking-[1px] text-[rgba(242,242,236,.45)]">
          GOES TO HACKKENTUCKY@KYCOMBINATOR.COM
        </span>
      </div>
    </form>
  )
}
