import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'navy' | 'ghost'
  size?:    'sm' | 'md' | 'lg'
  loading?: boolean
}

const variants = {
  primary:   'bg-orange-500 hover:bg-orange-600 text-white',
  secondary: 'border-2 border-white text-white hover:bg-white hover:text-[#1e2a3a]',
  outline:   'border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white',
  navy:      'bg-[#1e2a3a] hover:bg-[#162030] text-white',
  ghost:     'text-gray-600 hover:text-orange-500 hover:bg-orange-50',
}

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, disabled, ...props }, ref) => (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-bold rounded-xl',
        'transition-all duration-200 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed',
        variants[variant], sizes[size], className
      )}
      {...props}
    >
      {loading ? (
        <><span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        Sending...</>
      ) : children}
    </button>
  )
)
Button.displayName = 'Button'