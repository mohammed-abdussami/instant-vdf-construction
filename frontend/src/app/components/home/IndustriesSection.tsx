import { motion } from 'framer-motion'
import {
  Factory,
  Warehouse,
  Building2,
  Hospital,
  ShoppingBag,
  School,
} from 'lucide-react'

const INDUSTRIES = [
  {
    title: 'Factories',
    icon: Factory,
  },
  {
    title: 'Warehouses',
    icon: Warehouse,
  },
  {
    title: 'Commercial Buildings',
    icon: Building2,
  },
  {
    title: 'Hospitals',
    icon: Hospital,
  },
  {
    title: 'Shopping Malls',
    icon: ShoppingBag,
  },
  {
    title: 'Educational Institutions',
    icon: School,
  },
]

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <span className="text-orange-500 font-semibold uppercase tracking-wider">
            Industries We Serve
          </span>

          <h2 className="text-4xl md:text-5xl font-black text-[#1e2a3a] mt-4 mb-5">
            Trusted Across Multiple Industries
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We provide durable industrial flooring solutions for a wide range
            of commercial and industrial sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 hover:bg-orange-500 group transition-all duration-300 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-orange-100 group-hover:bg-white flex items-center justify-center mb-5 transition-all">
                <industry.icon
                  size={32}
                  className="text-orange-500"
                />
              </div>

              <h3 className="text-xl font-bold text-[#1e2a3a] group-hover:text-white transition-colors">
                {industry.title}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}