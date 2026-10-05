import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Layers, Settings, Shield, Clock } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Services() {
  const services = [
    {
      title: 'VDF Flooring (Vacuum Dewatering Flooring)',
      description: 'High-quality vacuum dewatering flooring system that removes excess water from concrete, resulting in a denser, stronger, and more durable floor surface.',
      features: [
        'Superior strength and durability',
        'Excellent load-bearing capacity',
        'Reduced curing time',
        'Smooth and level surface finish',
        'Ideal for warehouses and factories',
      ],
      image: '/images/1.png',
    },
    {
      title: 'Tremix Flooring',
      description: 'Cost-effective and durable tremix flooring solution using a screed board technique for creating strong, level concrete floors suitable for heavy-duty applications.',
      features: [
        'Economical flooring solution',
        'High compressive strength',
        'Uniform thickness',
        'Suitable for industrial use',
        'Quick installation process',
      ],
      image: '/images/trim5.jpg',
    },
    {
      title: 'RCC Concrete Flooring',
      description: 'Reinforced Cement Concrete flooring providing maximum strength and longevity through steel reinforcement, perfect for areas requiring exceptional load-bearing capacity.',
      features: [
        'Maximum structural strength',
        'Steel reinforcement for durability',
        'Long service life',
        'Resistance to heavy loads',
        'Versatile applications',
      ],
      image: '/images/road4.jpg',
    },
  ];

  const additionalServices = [
    {
      icon: Layers,
      title: 'Floor Polishing',
      description: 'Professional concrete floor polishing for a glossy, smooth finish',
    },
    {
      icon: Settings,
      title: 'Floor Repair & Maintenance',
      description: 'Expert repair and maintenance services for existing floors',
    },
    {
      icon: Shield,
      title: 'Epoxy Coating',
      description: 'Protective epoxy coating for enhanced durability and aesthetics',
    },
    {
      icon: Clock,
      title: 'Emergency Services',
      description: 'Quick response emergency flooring repair services',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial site visit and requirement analysis',
    },
    {
      step: '02',
      title: 'Planning',
      description: 'Detailed project planning and material selection',
    },
    {
      step: '03',
      title: 'Execution',
      description: 'Professional installation by expert team',
    },
    {
      step: '04',
      title: 'Quality Check',
      description: 'Thorough quality inspection and finishing',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/23.png"
            alt="Services"
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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Comprehensive Flooring Solutions for Every Need
          </motion.p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center mb-20 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="text-3xl font-bold text-[#0f172a] mb-4">{service.title}</h2>
                <p className="text-gray-600 text-lg mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="text-[#f97316] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/quote"
                  className="bg-[#f97316] text-white px-6 py-3 rounded-lg hover:bg-[#ea580c] transition font-semibold inline-flex items-center gap-2"
                >
                  Get Quote <ArrowRight size={20} />
                </Link>
              </div>
              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[400px] object-cover rounded-xl shadow-xl"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Additional Services</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive support services to maintain and enhance your flooring
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Our Process</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              A systematic approach to ensure quality and timely delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl font-bold">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-[#f97316]/30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Need Expert Flooring Solutions?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and detailed quote for your project
            </p>
            <Link
              to="/quote"
              className="bg-[#f97316] text-white px-8 py-4 rounded-lg hover:bg-[#ea580c] transition font-semibold text-lg inline-flex items-center gap-2"
            >
              Request Free Quote <ArrowRight />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default Services