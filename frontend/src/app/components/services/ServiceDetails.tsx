import { CheckCircle } from 'lucide-react'
import type { Service } from '@/app/types/service.types'

const isImageIcon = (icon: string) => /\.(png|jpe?g|webp|svg|gif)$/i.test(icon)

export default function ServiceDetails({ s }: { s: Service }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
      <div className="flex items-start gap-6 mb-6">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl shrink-0 overflow-hidden"
          style={{ background: isImageIcon(s.icon) ? 'transparent' : '#F97316' }}
        >
          {isImageIcon(s.icon)
            ? <img src={s.icon} alt={s.title} className="w-full h-full object-cover rounded-xl" />
            : s.icon}
        </div>
        <div>
          <h2 className="font-black text-2xl text-[#1e2a3a] mb-1">{s.title}</h2>
          <p className="text-xs text-orange-500 font-semibold">{s.areas}</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed mb-8">{s.longDesc}</p>

      <h4 className="font-bold text-base text-[#1e2a3a] mb-4">Key Features</h4>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {s.features?.map(f => (
          <li key={f} className="flex items-center gap-2.5">
            <CheckCircle size={16} className="text-orange-500 shrink-0" />
            <span className="text-gray-700 text-sm">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}