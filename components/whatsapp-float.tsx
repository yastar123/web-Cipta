"use client"

const WA_NUMBER = "6285366195381"
const WA_URL = `https://wa.me/${WA_NUMBER}?text=Halo%20webCipta%2C%20saya%20ingin%20konsultasi%20mengenai%20proyek%20saya.`

export function WhatsAppFloat() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-6 right-6 z-[70] group flex items-center gap-3"
    >
      {/* Tooltip */}
      <span className="pointer-events-none opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-xs font-semibold bg-[#25D366] text-white rounded-full px-3 py-1.5 shadow-lg whitespace-nowrap">
        Chat WhatsApp
      </span>

      {/* Button */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl shadow-[#25D366]/40 hover:scale-110 hover:shadow-[#25D366]/60 transition-all duration-300">
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
        {/* WA icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-7 w-7 relative z-10"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.558 4.116 1.535 5.845L.057 23.428a.75.75 0 0 0 .917.919l5.666-1.479A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.694-.498-5.243-1.37l-.376-.213-3.909 1.02 1.034-3.793-.228-.388A9.945 9.945 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
        </svg>
      </div>
    </a>
  )
}
