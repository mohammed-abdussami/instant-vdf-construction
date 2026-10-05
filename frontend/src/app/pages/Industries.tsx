import { motion } from 'framer-motion';
import { Warehouse, Factory, ShoppingBag, Truck, Utensils, Package, Building, Wrench } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Industries() {
  const industries = [
    {
      icon: Warehouse,
      title: 'Warehouses & Logistics',
      description: 'Heavy-duty flooring solutions designed for high-traffic warehouses, distribution centers, and logistics facilities. Our floors withstand constant movement of forklifts, pallet jacks, and heavy loads.',
      features: ['High load capacity', 'Impact resistance', 'Minimal maintenance', 'Fast installation'],
    },
    {
      icon: Factory,
      title: 'Manufacturing Plants',
      description: 'Industrial-grade flooring for manufacturing facilities requiring chemical resistance, durability, and safety. Perfect for automotive, textile, and heavy machinery manufacturing.',
      features: ['Chemical resistance', 'Oil resistant', 'Anti-slip surface', 'Long service life'],
    },
    {
      icon: Utensils,
      title: 'Food & Beverage',
      description: 'Hygienic and easy-to-clean flooring solutions for food processing units, kitchens, and beverage facilities. Meets all health and safety standards.',
      features: ['Hygienic surface', 'Easy cleaning', 'Water resistant', 'FDA compliant'],
    },
    {
      icon: ShoppingBag,
      title: 'Retail & Commercial',
      description: 'Aesthetically appealing and durable floors for shopping malls, showrooms, and commercial spaces. Combines functionality with visual appeal.',
      features: ['Attractive finish', 'High footfall resistance', 'Easy maintenance', 'Customizable'],
    },
    {
      icon: Package,
      title: 'Cold Storage',
      description: 'Specialized flooring for cold storage facilities and freezer warehouses. Designed to withstand extreme temperature variations and heavy loads.',
      features: ['Temperature resistant', 'Crack resistant', 'Moisture proof', 'Insulated options'],
    },
    {
      icon: Wrench,
      title: 'Automotive Workshops',
      description: 'Robust flooring solutions for automotive service centers, repair shops, and vehicle maintenance facilities. Resistant to oil, grease, and chemicals.',
      features: ['Oil & grease resistant', 'Heavy vehicle loads', 'Anti-slip', 'Easy to clean'],
    },
    {
      icon: Building,
      title: 'Pharmaceutical',
      description: 'Clean room compatible flooring for pharmaceutical manufacturing and research facilities. Meets stringent cleanliness and safety requirements.',
      features: ['Dust-free surface', 'Chemical resistant', 'Easy sanitization', 'ESD options'],
    },
    {
      icon: Truck,
      title: 'Transport & Aviation',
      description: 'Specialized flooring for transport hubs, hangars, and aviation facilities. Engineered to handle extreme loads and environmental conditions.',
      features: ['Aircraft load capacity', 'Fuel resistant', 'Weather resistant', 'Low maintenance'],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/bind+ware.jpg"
            alt="Industries"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f172a]/80" />
        </div>
        
        <div className="container mx-auto px-4 z-10 relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Specialized Flooring Solutions for Every Sector
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Our Expertise Across Industries</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              With over 15 years of experience, we understand the unique flooring requirements 
              of different industries and deliver tailored solutions that meet specific needs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <industry.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6">{industry.description}</p>
                <div className="space-y-2">
                  {industry.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 bg-[#f97316] rounded-full" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
                Industry-Specific Expertise
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Every industry has unique flooring requirements. We don't believe in one-size-fits-all 
                solutions. Our team analyzes your specific needs, considering factors like:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f97316] rounded-full mt-2" />
                  <span className="text-gray-700"><strong>Load Requirements:</strong> Understanding the weight and type of loads your floor will bear</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f97316] rounded-full mt-2" />
                  <span className="text-gray-700"><strong>Environmental Conditions:</strong> Temperature, moisture, chemicals, and other factors</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f97316] rounded-full mt-2" />
                  <span className="text-gray-700"><strong>Safety Standards:</strong> Industry-specific safety and compliance requirements</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[#f97316] rounded-full mt-2" />
                  <span className="text-gray-700"><strong>Operational Needs:</strong> Minimizing downtime and disruption to your operations</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="/images/sal2.jpg"
                alt="Expert Team"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-white mb-2">8+</div>
              <div className="text-gray-300">Industries Served</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-gray-300">Years Experience</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
              Ready to Discuss Your Industry-Specific Needs?
            </h2>
            <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
              Our experts are ready to provide tailored flooring solutions for your industry
            </p>
            <a
              href="/quote"
              className="bg-[#f97316] text-white px-8 py-4 rounded-lg hover:bg-[#ea580c] transition font-semibold text-lg inline-block"
            >
              Get Free Consultation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default Industries