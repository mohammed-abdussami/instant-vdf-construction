import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SectionTitle from '@/app/components/common/SectionTitle'
import { useScrollReveal } from '@/app/hooks/useScrollTop'
import { PROJECTS_DATA } from '@/app/constants/projectsData'
import { staggerContainer, fadeUp } from '@/app/utils/animations'

export default function ProjectsPreview() {
  const ref = useScrollReveal()
  const preview = PROJECTS_DATA.slice(0, 6)

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Our Work"
          title="Recent Projects"
          desc="Completed industrial flooring and road projects delivered across Hyderabad and Telangana"
          center
          className="mb-14"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {preview.map(p => (
            <motion.div
              key={p.id}
              variants={fadeUp}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.13)' }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white transition-all duration-300"
            >
              {/* Thumbnail — replace with real <img> */}
              <div
                className="relative flex items-center justify-center"
                style={{ height: 200, background: p.color }}
              >
                {/*  <img src={`/images/projects/${p.id}.jpg`} alt={p.title} className="w-full h-full object-cover" />  */}
                <span className="text-4xl">🏗️</span>
                <div
                  className="absolute top-3 left-3 text-white text-xs font-bold px-3 py-1 rounded-full"
                  style={{ background: '#F97316' }}
                >
                  {p.badge}
                </div>
              </div>
              <div className="p-5">
                <h4 className="font-bold text-base text-[#1e2a3a] mb-2">{p.title}</h4>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-gray-500">📍 {p.location}</span>
                  <span className="text-xs font-bold text-orange-500">{p.area}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link to="/projects">
            <button className="btn-outline text-sm">View All Projects</button>
          </Link>
        </div>
      </div>
    </section>
  )
}