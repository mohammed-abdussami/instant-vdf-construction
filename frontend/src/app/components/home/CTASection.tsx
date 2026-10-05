import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PHONE } from '@/app/utils/constants'

export default function CTASection() {
  return (
    <section style={{ background: '#F97316' }} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-black text-4xl md:text-5xl mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-base md:text-lg mb-10 opacity-90 max-w-xl mx-auto">
            Get a free consultation and quote from our experts today
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/quote">
              <button
                className="inline-flex items-center gap-2 bg-white font-bold px-10 py-4 rounded-xl text-base transition-all hover:bg-gray-100 active:scale-95"
                style={{ color: '#F97316' }}
              >
                Request Free Quote <ArrowRight size={18} />
              </button>
            </Link>
            <a href={`tel:${PHONE}`}>
              <button className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-white/10 transition-all">
                <Phone size={16} /> Call Us Now
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}