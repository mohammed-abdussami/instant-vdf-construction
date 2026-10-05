import { cn } from '@/lib/utils'

interface CardProps { children: React.ReactNode; className?: string; hover?: boolean }

export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div className={cn(
      'bg-white rounded-2xl border border-gray-100 shadow-sm',
      hover && 'transition-all duration-300 hover:-translate-y-1 hover:shadow-xl',
      className
    )}>
      {children}
    </div>
  )
}

export function CardBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn('p-6 md:p-8', className)}>{children}</div>
}