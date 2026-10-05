import { cn } from '@/lib/utils'

interface SectionTitleProps {
  tag?:       string
  title:      string
  desc?:      string
  center?:    boolean
  light?:     boolean
  className?: string
}

export default function SectionTitle({ tag, title, desc, center, light, className }: SectionTitleProps) {
  return (
    <div className={cn(center && 'text-center', className)}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className={cn('font-black text-3xl md:text-4xl leading-tight mb-3', light ? 'text-white' : 'text-[#1e2a3a]')}>
        {title}
      </h2>
      {desc && (
        <p className={cn('text-base leading-relaxed', light ? 'text-gray-300' : 'text-gray-500', center && 'max-w-2xl mx-auto')}>
          {desc}
        </p>
      )}
    </div>
  )
}