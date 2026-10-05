import AnimatedCounter from '@/app/components/common/AnimatedCounter'

const STATS = [
  { num: 500, suffix: '+', label: 'Projects Completed' },
  { num: 15,  suffix: '+', label: 'Years Experience' },
  { num: 300, suffix: '+', label: 'Happy Clients' },
  { num: 50,  suffix: '+', label: 'Expert Team Members' },
]

export default function ProjectStats() {
  return (
    <div style={{ background: '#F97316' }} className="py-12 rounded-2xl my-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white px-8">
        {STATS.map(s => (
          <div key={s.label}>
            <div className="font-black text-4xl mb-1">
              <AnimatedCounter target={s.num} suffix={s.suffix} />
            </div>
            <div className="text-sm font-medium opacity-90">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}