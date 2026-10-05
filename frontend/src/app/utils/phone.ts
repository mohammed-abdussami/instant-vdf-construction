// Strips everything except digits and caps at 10 — prevents browser
// autofill (e.g. US ZIP+4 "63008-41097") or stray characters from
// corrupting the phone field. Use as the onChange handler for phone inputs.
export function sanitizePhone(raw: string): string {
  return raw.replace(/\D/g, '').slice(0, 10)
}

// A valid Indian mobile number: exactly 10 digits, first digit 6-9.
export function isValidIndianPhone(phone: string): boolean {
  return /^[6-9]\d{9}$/.test(phone)
}