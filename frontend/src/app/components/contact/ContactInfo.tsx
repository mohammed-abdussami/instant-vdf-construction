import { Mail, Phone, MapPin } from 'lucide-react'
import { EMAIL, PHONE, ADDRESS, SOCIAL } from '@/app/utils/constants'

export default function ContactInfo() {
  return (
    <div>
      <h3 className="font-black text-2xl text-[#1e2a3a] mb-6">Let's Discuss Your Project</h3>

      <div className="space-y-5 mb-8">
        {[
          { icon: <Mail size={18} className="text-white" />,   label: 'Email',             value: EMAIL, href: `mailto:${EMAIL}` },
          { icon: <Phone size={18} className="text-white" />,  label: 'Phone / WhatsApp',  value: PHONE, href: `tel:${PHONE}` },
          { icon: <MapPin size={18} className="text-white" />, label: 'Location',           value: ADDRESS, href: undefined },
        ].map(item => (
          <div key={item.label} className="flex items-start gap-4">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: '#F97316' }}
            >
              {item.icon}
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                {item.label}
              </p>
              {item.href
                ? <a href={item.href} className="text-[#1e2a3a] text-sm hover:text-orange-500 transition-colors">{item.value}</a>
                : <p className="text-[#1e2a3a] text-sm">{item.value}</p>}
            </div>
          </div>
        ))}
      </div>

      {/* Social links */}
      <div className="flex flex-wrap gap-3">
        {[
          { label: '▶ YouTube',    href: SOCIAL.youtube },
          { label: '📸 Instagram', href: SOCIAL.instagram },
          { label: '𝕏 Twitter',   href: SOCIAL.twitter },
          { label: 'Facebook',     href: SOCIAL.facebook },
        ].map(s => (
          <a key={s.href} href={s.href} target="_blank" rel="noreferrer"
             className="border border-gray-300 hover:border-orange-500 hover:text-orange-500 text-gray-600 text-xs font-bold px-4 py-2 rounded-lg transition-all">
            {s.label}
          </a>
        ))}
      </div>
    </div>
  )
}