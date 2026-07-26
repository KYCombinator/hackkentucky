// Shared logo-upload rules for the sponsor/bounty forms and the /sponsor/intake
// page. Client uses validateLogoFile + the constants; the API routes use
// sniffImage to re-check bytes server-side.

export const LOGO_MAX_BYTES = 4 * 1024 * 1024 // 4 MB — stays under the Lambda ~6MB request limit
export const LOGO_ACCEPT = ["image/png", "image/jpeg", "image/webp", "image/gif", "image/svg+xml"]
export const LOGO_ACCEPT_ATTR = ".png,.jpg,.jpeg,.webp,.gif,.svg"
export const LOGO_HINT = "PNG, JPG, SVG, WEBP, or GIF · max 4 MB"

export const LOGO_EXT: Record<string, string> = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/webp": "webp",
  "image/gif": "gif",
  "image/svg+xml": "svg",
}

// Client-side validation (runs in the browser). Returns an error string or null.
export function validateLogoFile(file: File): Promise<string | null> {
  return new Promise((resolve) => {
    if (!LOGO_ACCEPT.includes(file.type)) {
      resolve("Logo must be a PNG, JPG, SVG, WEBP, or GIF.")
      return
    }
    if (file.size > LOGO_MAX_BYTES) {
      resolve("Logo must be 4 MB or smaller.")
      return
    }
    if (file.type === "image/svg+xml") {
      resolve(null) // SVGs don't decode via Image() reliably; the server sniffs them.
      return
    }
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img.naturalWidth < 1 || img.naturalHeight < 1 ? "That image looks empty or corrupted." : null)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      resolve("That file couldn't be read as an image.")
    }
    img.src = url
  })
}

// Server-side magic-byte check — don't trust the browser-supplied content-type.
export function sniffImage(buf: Buffer, mime: string): boolean {
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
