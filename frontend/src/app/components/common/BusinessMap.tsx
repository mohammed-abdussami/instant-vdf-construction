interface BusinessMapProps {
  /** Full address or place name to search for (used if lat/lng aren't provided) */
  address: string
  /** Precise coordinates — takes priority over `address` when both are given */
  lat?: number
  lng?: number
  /** Optional: pixel height of the map */
  height?: number
  className?: string
}

/**
 * Embedded Google Map — no API key required.
 * Uses the public maps.google.com iframe embed, which is the same
 * zero-setup method most small-business sites use.
 *
 * Pass `lat`/`lng` for a pin-accurate location (recommended — matches
 * exactly what shows on Google Maps). Falls back to a text search on
 * `address` if coordinates aren't provided.
 */
export default function BusinessMap({ address, lat, lng, height = 380, className = '' }: BusinessMapProps) {
  const src = (lat !== undefined && lng !== undefined)
    ? `https://maps.google.com/maps?q=${lat},${lng}&t=&z=16&ie=UTF8&iwloc=&output=embed`
    : `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`

  return (
    <div className={`rounded-xl overflow-hidden shadow-lg border border-gray-100 ${className}`}>
      <iframe
        title="Instant VDF Construction — Location"
        src={src}
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  )
}