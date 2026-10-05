import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS_DATA } from '@/app/constants/projectsData'
import ProjectCard from './ProjectCard'
import { staggerContainer } from '@/app/utils/animations'

const FILTERS = ['All', 'VDF Flooring', 'Tremix Flooring', 'RCC Road', 'Laser Screed', 'Waterproofing']

export default function ProjectGallery() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.type.toLowerCase().includes(active.split(' ')[0].toLowerCase()))

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              active === f
                ? 'text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            style={active === f ? { background: '#F97316' } : {}}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map(p => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}