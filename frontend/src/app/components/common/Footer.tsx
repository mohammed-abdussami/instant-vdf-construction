import { Link } from 'react-router-dom'
import { CONTACT } from '@/app/constants/contact'
import logo from '@/assets/logo/INSTANT-VDF-CONSTRUCTION-LOGO.png'

const quickLinks = ['About Us','Services','Projects','Gallery','Contact']
const services   = ['VDF Flooring','Tremix Flooring','RCC Concrete Flooring','Industrial Flooring','Laser Screeding']

export default function Footer() {
  return (
    <footer style={{ background: '#1e2a3a' }} className="text-white">
      <div className="container-custom py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
                <img
                  src={logo}
                  alt="Instant VDF Construction"
                  className="h-12 w-auto object-contain rounded-md "
                  style={{ background: 'white', padding: '4px 8px' }}
                />
            
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading provider of VDF Flooring, Tremix Flooring, and RCC Concrete Flooring solutions across Hyderabad & Telangana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map(l => (
                <li key={l}>
                  <Link to={`/${l.toLowerCase().replace(' ','-')}`}
                    className="text-gray-400 text-sm hover:text-orange-400 transition-colors">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">Our Services</h5>
            <ul className="space-y-3">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-gray-400 text-sm hover:text-orange-400 transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-5">Contact Us</h5>
            <div className="space-y-3 text-sm text-gray-400">
              <a href={`mailto:${CONTACT.email}`}
                 className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                ✉ {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`}
                 className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                📞 Call for inquiries
              </a>
              <p>📍 {CONTACT.address}</p>
            </div>
            {/* Socials */}
            <div className="flex gap-3 mt-5">
              {[
                { href: CONTACT.facebook,  label: 'f' },
                { href: CONTACT.instagram, label: '📷' },
                { href: CONTACT.twitter,   label: '𝕏' },
                { href: CONTACT.youtube,   label: '▶' },
              ].map(s => (
                <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
                   className="w-9 h-9 rounded-lg bg-white/10 hover:bg-orange-500 flex items-center justify-center text-xs font-bold transition-all">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col md:flex-row justify-between items-center gap-3 text-gray-400 text-sm">
          <span>© {new Date().getFullYear()} Instant VDF Construction. All rights reserved.</span>
          <span>Hyderabad · Telangana · India</span>
        </div>
      </div>
    </footer>
  )
}