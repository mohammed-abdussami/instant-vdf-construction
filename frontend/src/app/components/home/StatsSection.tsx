import { motion } from 'framer-motion'
import AnimatedCounter from '@/app/components/common/AnimatedCounter'

const STATS = [
  { num: 1200, suffix: '+', label: 'Projects Completed' },
  { num: 22,  suffix: '+', label: 'Years Experience' },
  { num: 1000, suffix: '+', label: 'Happy Clients' },
  { num: 50,  suffix: '+', label: 'Expert Team' },
]

export default function StatsSection() {
  return (
    <div style={{ background:'#F97316' }} className="py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {STATS.map((s, i) => (
            <motion.div key={s.label}
              initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }}
              transition={{ delay: i * 0.1, duration:0.5 }}>
              <div className="font-black text-5xl mb-1">
                <AnimatedCounter target={s.num} suffix={s.suffix} />
              </div>
              <div className="text-sm font-medium opacity-90">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}