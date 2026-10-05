import { cn } from '@/lib/utils'

interface BadgeProps { children: React.ReactNode; variant?: 'orange'|'navy'|'green'|'gray'; className?: string }

const variants = {
  orange: 'bg-orange-100 text-orange-600',
  navy:   'bg-blue-50    text-[#1e2a3a]',
  green:  'bg-green-100  text-green-700',
  gray:   'bg-gray-100   text-gray-600',
}

export function Badge({ children, variant = 'orange', className }: BadgeProps) {
  return (
    <span className={cn('inline-flex items-center px-3 py-1 rounded-full text-xs font-bold', variants[variant], className)}>
      {children}
    </span>
  )
}