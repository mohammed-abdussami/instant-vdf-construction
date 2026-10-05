import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { SERVICES_DATA } from '@/app/constants/servicesData'

// Real photo shown behind each service card. Services whose SERVICES_DATA.icon
// is already an imported image (vdf/tremix/rcc/groove) use that directly.
// The remaining services only have an emoji icon, so we give them a real
// fallback photo here instead of showing a bare symbol on the homepage.
const FALLBACK_PHOTO: Record<string, string> = {
  'laser':               '/images/ware4.jpg',   // laser screeding → warehouse floor flatness
  'waterproof':          '/images/top1.jpg',    // waterproofing → rooftop slab
  'industrial-concrete': '/images/46.png',    // industrial concrete → RCC pour w/ crew
  'car-parking':       '/images/sal1.jpg',    // car parking / cellar
  'warehouse-concrete': '/images/ware1.jpg',  // warehouse concrete flooring
  'venture-road':       '/images/road2.jpg',  // venture road works
  'fci-godown':         '/images/ware2.jpg',  // FCI godown flooring
}

const isImageIcon = (icon: string) => /\.(png|jpe?g|webp|svg|gif)$/i.test(icon)

// Show the first 6 services on the homepage; the full list lives on /services
const previewServices = SERVICES_DATA.slice(0, 6)

export default function ServicesPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">
            Our Services
          </h2>

          <p className="text-gray-600">
            Complete industrial flooring solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {previewServices.map((service, index) => {
            const photo = isImageIcon(service.icon) ? service.icon : FALLBACK_PHOTO[service.id]

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                {/* Photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={photo}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {service.desc}
                  </p>

                  <Link
                    to={`/services/${service.slug}`}
                    className="text-orange-500 inline-flex items-center gap-2 font-semibold hover:gap-3 transition-all"
                  >
                    Learn More
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#1e2a3a] hover:bg-[#162030] text-white font-bold px-8 py-4 rounded-xl transition-all"
          >
            View All Services <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </section>
  )
}