export default function MapSection() {
  return (
    <div className="mt-8 rounded-2xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: 260 }}>
      {/*
        TO ADD GOOGLE MAPS:
        1. Go to https://maps.google.com
        2. Search your address
        3. Click Share → Embed a map → Copy HTML
        4. Replace the div below with the <iframe> tag from Google

        Example:
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!..."
          width="100%"
          height="260"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      */}
      <div className="w-full h-full flex flex-col items-center justify-center bg-gray-100 text-gray-500 gap-2">
        <span className="text-4xl">📍</span>
        <p className="text-sm font-semibold">Hyderabad, Telangana, India</p>
        <p className="text-xs text-gray-400">Replace with Google Maps embed</p>
      </div>
    </div>
  )
}