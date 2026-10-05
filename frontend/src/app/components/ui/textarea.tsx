import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string; error?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, id, ...props }, ref) => (
    <div className="w-full">
      {label && <label htmlFor={id} className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">{label}</label>}
      <textarea
        ref={ref} id={id}
        className={cn(
          'w-full border rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50 resize-none',
          'focus:outline-none focus:border-orange-400 focus:bg-white transition-colors',
          error ? 'border-red-400' : 'border-gray-200',
          className
        )}
        {...props}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
)
Textarea.displayName = 'Textarea'