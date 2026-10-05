import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '@/app/components/common/SectionTitle'
import { useScrollReveal } from '@/app/hooks/useScrollTop'
import { TESTIMONIALS_DATA } from '@/app/constants/testimonialsData'
import { staggerContainer, fadeUp } from '@/app/utils/animations'

export default function TestimonialsPreview() {
  const ref = useScrollReveal()
  const preview = TESTIMONIALS_DATA.slice(0, 3)

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="Client Reviews"
          title="What Our Clients Say"
          center
          className="mb-14"
        />

        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {preview.map(t => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 16px 32px rgba(0,0,0,0.1)' }}
              className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm relative transition-all duration-300"
            >
              {/* Big quote */}
              <span
                className="absolute top-4 right-5 font-black leading-none select-none pointer-events-none"
                style={{ fontSize: 72, color: 'rgba(249,115,22,0.08)' }}
              >"</span>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} fill="#F97316" stroke="none" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed italic mb-6">"{t.text}"</p>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0"
                  style={{ background: '#1e2a3a' }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-bold text-sm text-[#1e2a3a]">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link to="/testimonials">
            <button className="btn-outline text-sm">View All Reviews</button>
          </Link>
        </div>
      </div>
    </section>
  )
}