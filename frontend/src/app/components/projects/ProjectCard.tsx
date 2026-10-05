import { motion } from 'framer-motion'
import type { Project } from '@/app/types/project.types'
import { fadeUp } from '@/app/utils/animations'

export default function ProjectCard({ p }: { p: Project }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.13)' }}
      className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white transition-all duration-300"
    >
      {/* Image — replace div with <img> when you have photos */}
      <div className="relative flex items-center justify-center" style={{ height: 200, background: p.color }}>
        {/* <img src={`/images/projects/${p.id}.jpg`} alt={p.title} className="w-full h-full object-cover" /> */}
        <span className="text-4xl">🏗️</span>
        <div
          className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full"
          style={{ background: '#F97316' }}
        >
          {p.badge}
        </div>
        <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full">
          {p.year}
        </div>
      </div>

      <div className="p-5">
        <h4 className="font-bold text-base text-[#1e2a3a] mb-2">{p.title}</h4>
        <p className="text-xs text-gray-400 leading-relaxed mb-3">{p.desc}</p>
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">📍 {p.location}</span>
          <span className="text-xs font-bold text-orange-500">{p.area}</span>
        </div>
      </div>
    </motion.div>
  )
}