import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Mail, Phone, ChevronDown } from 'lucide-react'
import { NAV_LINKS} from '@/app/constants/navLinks'
import { CONTACT } from '@/app/constants/contact'
import { SERVICES_DATA } from '@/app/constants/servicesData'
import logo from '@/assets/logo/INSTANT-VDF-CONSTRUCTION-LOGO.png'

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)      // desktop hover dropdown
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false) // mobile accordion
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const location              = useLocation()

  // Small delay before closing on mouse-leave so moving from the
  // "Services" link into the dropdown panel doesn't flicker-close it
  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setServicesOpen(true)
  }
  const scheduleCloseDropdown = () => {
    closeTimer.current = setTimeout(() => setServicesOpen(false), 150)
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  return (
    <header className="sticky top-0 z-50">

      {/* ── Top info bar ── */}
      <div className="bg-[#1e2a3a] text-white text-sm hidden md:block">
        <div className="container-custom flex items-center gap-6 py-2">
          <a href={`mailto:${CONTACT.email}`}
             className="flex items-center gap-2 hover:text-orange-400 transition-colors text-xs">
            <Mail size={13}/>{CONTACT.email}
          </a>
          <a href={`tel:${CONTACT.phone}`}
             className="flex items-center gap-2 hover:text-orange-400 transition-colors text-xs">
            <Phone size={13}/>Call Us
          </a>
          <div className="ml-auto flex items-center gap-4">
            <a href={CONTACT.facebook}  target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors text-xs font-bold">f</a>
            <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href={CONTACT.twitter}   target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors text-xs font-bold">𝕏</a>
            <a href={CONTACT.youtube}   target="_blank" rel="noreferrer" className="hover:text-orange-400 transition-colors">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* ── Main navbar ── */}
      <nav className={`bg-white border-b border-gray-200 transition-shadow ${scrolled ? 'shadow-md' : ''}`}>
        <div className="container-custom flex items-center justify-between h-16">

          {/* Logo */}
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Instant VDF Construction"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden xl:flex items-center gap-5">
            {NAV_LINKS.map(link => {
              if (link.href !== '/services') {
                return (
                  <Link key={link.href} to={link.href}
                    className={`text-sm font-medium transition-colors whitespace-nowrap ${
                      location.pathname === link.href
                        ? 'text-orange-500 font-semibold'
                        : 'text-gray-700 hover:text-orange-500'
                    }`}>
                    {link.label}
                  </Link>
                )
              }

              // ── Services: hover dropdown listing every individual service ──
              const isServicesActive = location.pathname.startsWith('/services')
              return (
                <div
                  key="services-dropdown"
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={scheduleCloseDropdown}
                >
                  <Link
                    to="/services"
                    className={`flex items-center gap-1 text-sm font-medium transition-colors whitespace-nowrap ${
                      isServicesActive ? 'text-orange-500 font-semibold' : 'text-gray-700 hover:text-orange-500'
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={14}
                      className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>

                  {servicesOpen && (
                    <div
                      className="absolute left-0 top-full pt-3 w-72 z-50"
                      onMouseEnter={openDropdown}
                      onMouseLeave={scheduleCloseDropdown}
                    >
                      <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 max-h-[70vh] overflow-y-auto">
                        {SERVICES_DATA.map(s => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                          >
                            {s.title}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-1 pt-1">
                          <Link
                            to="/services"
                            className="block px-5 py-2.5 text-sm font-semibold text-orange-500 hover:bg-orange-50 transition-colors"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* CTA button */}
          <Link to="/quote"
            className="hidden xl:flex btn-primary text-sm">
            Get Quote
          </Link>

          {/* Hamburger */}
          <button onClick={() => setOpen(o => !o)}
                  className="xl:hidden p-2 text-gray-700 hover:text-orange-500 transition-colors">
            {open ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="xl:hidden bg-white border-t border-gray-100 px-4 pb-5">
            {NAV_LINKS.map(link => {
              if (link.href !== '/services') {
                return (
                  <Link key={link.href} to={link.href}
                    className={`block py-3 text-sm font-medium border-b border-gray-100 transition-colors ${
                      location.pathname === link.href ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'
                    }`}>
                    {link.label}
                  </Link>
                )
              }

              // ── Services: tap-to-expand accordion on mobile ──
              const isServicesActive = location.pathname.startsWith('/services')
              return (
                <div key="mobile-services" className="border-b border-gray-100">
                  <button
                    onClick={() => setMobileServicesOpen(v => !v)}
                    className={`w-full flex items-center justify-between py-3 text-sm font-medium transition-colors ${
                      isServicesActive ? 'text-orange-500' : 'text-gray-700'
                    }`}
                  >
                    Services
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <div className="pb-2 pl-3">
                      {SERVICES_DATA.map(s => (
                        <Link
                          key={s.slug}
                          to={`/services/${s.slug}`}
                          className="block py-2 text-sm text-gray-600 hover:text-orange-500 transition-colors"
                        >
                          {s.title}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="block py-2 text-sm font-semibold text-orange-500"
                      >
                        View All Services →
                      </Link>
                    </div>
                  )}
                </div>
              )
            })}
            <Link to="/quote"
              className="block mt-4 btn-primary justify-center text-sm text-center">
              Get Free Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}