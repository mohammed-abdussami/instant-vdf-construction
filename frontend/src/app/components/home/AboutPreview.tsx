import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '@/app/components/common/SectionTitle'
import { useScrollReveal } from '@/app/hooks/useScrollTop'
import { ABOUT_POINTS } from './homeData'

export default function AboutPreview() {
  const ref = useScrollReveal()
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle tag="About Us" title="Leading Construction Flooring Experts"
              desc="INSTANT VDF CONSTRUCTION specializes in providing top-quality flooring solutions for industrial, commercial, and residential projects. With years of experience and a commitment to excellence, we deliver durable and reliable flooring systems."
              className="mb-6"/>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 my-7">
              {ABOUT_POINTS.map(p => (
                <motion.div key={p} className="flex items-center gap-2.5"
                  whileHover={{ x:4 }} transition={{ duration:0.2 }}>
                  <CheckCircle size={16} className="text-orange-500 shrink-0"/>
                  <span className="text-gray-700 text-sm font-medium">{p}</span>
                </motion.div>
              ))}
            </div>
            <Link to="/about">
              <button className="inline-flex items-center gap-2 bg-[#1e2a3a] hover:bg-[#162030] text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all">
                Learn More <ArrowRight size={16}/>
              </button>
            </Link>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/images/bind2.jpg"
              alt="Instant VDF Construction — site work"
              className="w-full h-full object-cover"
              style={{ height: 420 }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}