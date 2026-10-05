import { motion } from 'framer-motion'
import type { Service } from '@/app/types/service.types'

export default function ServiceProcess({ s }: { s: Service }) {
  return (
    <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8 md:p-10">
      <h4 className="font-black text-xl text-[#1e2a3a] mb-8">Our Process</h4>
      <div className="space-y-6">
        {s.process?.map((step, i) => (
          <motion.div
            key={step.step}
            className="flex gap-5"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-sm shrink-0 mt-0.5"
              style={{ background: '#F97316' }}
            >
              {step.step}
            </div>
            <div>
              <h5 className="font-bold text-base text-[#1e2a3a] mb-1">{step.title}</h5>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}