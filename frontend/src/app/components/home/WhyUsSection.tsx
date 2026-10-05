import { motion } from 'framer-motion'
import { useScrollReveal } from '@/app/hooks/useScrollTop'
import SectionTitle from '@/app/components/common/SectionTitle'
import { WHY_POINTS } from '@/app/constants'

export default function WhyUsSection() {
  const ref = useScrollReveal()

  return (
    <section style={{ background: '#1e2a3a' }} className="section-padding">
      <div className="container-custom">
        <div ref={ref} className="fade-in grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT — warehouse/floor image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl order-2 md:order-1">
            <img
              src="/images/ware1.jpg"
              alt="VDF Warehouse"
              className="w-full h-full object-cover"
              style={{ height: 440 }}
            />
          </div>

          {/* RIGHT — content */}
          <div className="order-1 md:order-2">
            <SectionTitle
              tag="Why Choose Us"
              title="Why Choose Us?"
              desc="We stand out in the construction flooring industry with our commitment to quality, innovation, and customer satisfaction."
              light
              className="mb-10"
            />

            <div className="space-y-7">
              {WHY_POINTS.map((p, i) => (
                <motion.div
                  key={p.title}
                  className="flex items-start gap-5"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                    style={{ background: '#F97316' }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{p.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}