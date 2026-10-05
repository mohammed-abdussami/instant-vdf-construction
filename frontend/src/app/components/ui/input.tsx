import { forwardRef } from 'react'
import { cn } from '@/lib/utils'

// ── Input ────────────────────────────────────────────────────
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, ...props }, ref) => (
    <div className="w-full">
      {label && <label htmlFor={id} className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">{label}</label>}
      <input
        ref={ref} id={id}
        className={cn(
          'w-full border rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50',
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
Input.displayName = 'Input'

// ── Select ───────────────────────────────────────────────────
interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string; error?: string; options: { value:string; label:string }[]
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, options, ...props }, ref) => (
    <div className="w-full">
      {label && <label htmlFor={id} className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">{label}</label>}
      <select
        ref={ref} id={id}
        className={cn(
          'w-full border rounded-xl px-4 py-3 text-sm text-gray-800 bg-gray-50',
          'focus:outline-none focus:border-orange-400 focus:bg-white transition-colors',
          error ? 'border-red-400' : 'border-gray-200',
          className
        )}
        {...props}
      >
        {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  )
)
Select.displayName = 'Select'