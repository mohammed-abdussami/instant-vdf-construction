import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionTitle from '@/app/components/common/SectionTitle'
import { FAQ_DATA } from '@/app/constants/faqData'

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0)
  const preview = FAQ_DATA.slice(0, 4)

  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          tag="FAQ"
          title="Frequently Asked Questions"
          desc="Common questions about our flooring services"
          center
          className="mb-12"
        />

        <div className="space-y-3">
          {preview.map(faq => (
            <div key={faq.id} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-sm text-[#1e2a3a] pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: open === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} className="text-orange-500 shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {open === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <div className="px-6 pb-5 pt-3 text-gray-500 text-sm leading-relaxed border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/faq">
            <button className="btn-outline text-sm">View All FAQs</button>
          </Link>
        </div>
      </div>
    </section>
  )
}