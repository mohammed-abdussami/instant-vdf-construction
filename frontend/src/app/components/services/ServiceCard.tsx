import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Service } from '@/app/types/service.types'
import { fadeUp } from '@/app/utils/animations'

// Imported images resolve to a URL string containing a file extension (e.g. ".jpg", ".png").
// Emoji icons are short literal characters with no such extension — use that to tell them apart.
const isImageIcon = (icon: string) => /\.(png|jpe?g|webp|svg|gif)$/i.test(icon)

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.11)' }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all duration-300 group"
    >
      <div className="p-8">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 overflow-hidden"
          style={{ background: isImageIcon(s.icon) ? 'transparent' : '#F97316' }}
        >
          {isImageIcon(s.icon)
            ? <img src={s.icon} alt={s.title} className="w-full h-full object-cover rounded-xl" />
            : s.icon}
        </div>
        <h3 className="font-black text-xl text-[#1e2a3a] mb-3">{s.title}</h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
        <p className="text-xs text-orange-500 font-semibold mb-5">{s.areas}</p>
        <Link to={`/services/${s.slug}`}>
          <span className="inline-flex items-center gap-1.5 text-[#1e2a3a] font-bold text-sm hover:text-orange-500 transition-colors group-hover:gap-3">
            Learn More <ArrowRight size={14} />
          </span>
        </Link>
      </div>
    </motion.div>
  )
}