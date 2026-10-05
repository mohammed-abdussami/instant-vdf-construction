import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import SEO from '@/app/components/common/SEO'
import PageBanner from '@/app/components/common/PageBanner'
import ServiceDetails from '@/app/components/services/ServiceDetails'
import { SERVICES_DATA } from '@/app/constants/servicesData'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = SERVICES_DATA.find(s => s.slug === slug)

  // Unknown slug -> send to the services hub instead of a dead page
  if (!service) return <Navigate to="/services" replace />

  return (
    <>
      <SEO
        title={service.title}
        description={service.desc}
        keywords={`${service.title} Hyderabad, ${service.title} Telangana, ${service.areas}`}
      />

      <PageBanner
        title={service.title}
        subtitle={service.desc}
        breadcrumbs={[{ label: 'Services', href: '/services' }, { label: service.title }]}
      />

      <section className="py-16">
        <div className="container-custom max-w-4xl mx-auto">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-orange-500 transition-colors mb-6"
          >
            <ArrowLeft size={15} /> All Services
          </Link>

          <ServiceDetails s={service} />

          {/* Process steps, if this service has them */}
          {service.process && service.process.length > 0 && (
            <div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
              <h4 className="font-bold text-base text-[#1e2a3a] mb-6">Our Process</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {service.process.map(p => (
                  <div key={p.step} className="flex gap-4">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ background: '#F97316' }}
                    >
                      {p.step}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1e2a3a] text-sm mb-1">{p.title}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="mt-10 rounded-2xl bg-[#1e2a3a] px-8 py-10 text-center">
            <h3 className="text-white text-xl font-bold mb-2">
              Need {service.title} for your project?
            </h3>
            <p className="text-gray-300 text-sm mb-6">
              Get a detailed quote within 24 hours — no obligation.
            </p>
            <Link
              to="/quote"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Request Free Quote <ArrowRight size={18} />
            </Link>
          </div>

          {/* Other services */}
          <div className="mt-14">
            <h4 className="font-bold text-lg text-[#1e2a3a] mb-4">Other Services</h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {SERVICES_DATA.filter(s => s.slug !== service.slug).map(s => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="flex items-center justify-between px-5 py-4 rounded-xl border border-gray-100 bg-white hover:border-orange-200 hover:bg-orange-50 transition-colors group"
                >
                  <span className="text-sm font-medium text-gray-700 group-hover:text-orange-600">
                    {s.title}
                  </span>
                  <ArrowRight size={15} className="text-gray-300 group-hover:text-orange-500" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}