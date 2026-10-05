import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import Container from './Container'

interface PageBannerProps {
  title:    string
  subtitle?: string
  breadcrumbs?: { label: string; href?: string }[]
}

export default function PageBanner({ title, subtitle, breadcrumbs }: PageBannerProps) {
  return (
    <section
      className="relative py-16 md:py-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0f1923 0%,#1e2a3a 100%)' }}
    >
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage:`url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0H0v40' fill='none' stroke='white' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
      {/* Orange top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background:'linear-gradient(to right,#F97316,#C62828,#F97316)' }} />

      <Container className="relative z-10 text-center text-white">
        {breadcrumbs && (
          <nav className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mb-4">
            <Link to="/" className="hover:text-orange-400 transition-colors">Home</Link>
            {breadcrumbs.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight size={12} />
                {b.href
                  ? <Link to={b.href} className="hover:text-orange-400 transition-colors">{b.label}</Link>
                  : <span className="text-orange-400">{b.label}</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="font-black text-4xl md:text-5xl mb-3">{title}</h1>
        {subtitle && <p className="text-gray-300 text-base max-w-xl mx-auto">{subtitle}</p>}
      </Container>
    </section>
  )
}