import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      position: 'Operations Manager',
      company: 'Global Logistics Pvt Ltd',
      rating: 5,
      text: 'INSTANT VDF CONSTRUCTION transformed our warehouse with their exceptional VDF flooring. The quality of work and professionalism of their team exceeded our expectations. The floor has been handling heavy loads perfectly for over 2 years now.',
      image: '/images/person1.jpg',
    },
    {
      name: 'Priya Sharma',
      position: 'Facility Head',
      company: 'Manufacturing Solutions Inc',
      rating: 5,
      text: 'We needed a quick turnaround for our manufacturing plant flooring, and they delivered! The tremix flooring was completed ahead of schedule without compromising on quality. Highly recommended for industrial projects.',
      image: '/images/person2.jpg',
    },
    {
      name: 'Amit Patel',
      position: 'Director',
      company: 'FoodTech Industries',
      rating: 5,
      text: 'The team understood our hygienic requirements for food processing and delivered a floor that meets all FDA standards. Their attention to detail and commitment to safety was impressive. Best decision we made for our facility.',
      image: '/images/person3.jpg',
    },
    {
      name: 'Sneha Reddy',
      position: 'Project Manager',
      company: 'Metro Cold Storage',
      rating: 5,
      text: 'Exceptional service from start to finish! They installed specialized flooring in our cold storage facility that withstands extreme temperatures perfectly. The project was completed on time and within budget.',
      image: '/images/person4.jpg',
    },
    {
      name: 'Vikram Singh',
      position: 'Owner',
      company: 'AutoCare Workshop',
      rating: 5,
      text: 'The RCC flooring in our automotive workshop has been outstanding. It handles heavy vehicles, resists oil and chemicals, and looks great. The team was professional, efficient, and delivered exactly what we needed.',
      image: '/images/person5.jpg',
    },
    {
      name: 'Meera Krishnan',
      position: 'Facilities Director',
      company: 'PharmaCorp Ltd',
      rating: 5,
      text: 'Their expertise in pharmaceutical flooring is unmatched. They understood our clean room requirements and delivered a dust-free, chemical-resistant floor that meets all regulatory standards. Excellent work!',
      image: '/images/person6.jpg',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/head7.jpg"
            alt="Testimonials"
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
            Client Testimonials
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            What Our Clients Say About Us
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#f97316]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">300+</div>
              <div className="text-white/90">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-white/90">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">98%</div>
              <div className="text-white/90">Client Retention</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-white/90">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our commitment to excellence has earned us the trust of clients across various industries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition relative"
              >
                <div className="absolute top-6 right-6">
                  <Quote className="text-[#f97316]/20" size={48} />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0f172a] text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.position}</p>
                    <p className="text-[#f97316] text-sm font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-[#f97316] fill-[#f97316]" size={18} />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">See What Our Clients Say</h2>
            <p className="text-gray-600 text-lg">
              Watch video testimonials from our satisfied clients
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="aspect-video bg-gray-200 flex items-center justify-center">
              <div className="text-center p-8">
                <Quote className="text-[#f97316] mx-auto mb-4" size={64} />
                <p className="text-gray-600 text-lg mb-4">
                  Video testimonials showcase real experiences from our clients
                </p>
                <a
                  href="https://www.youtube.com/@instant_vdf_construction"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#f97316] text-white px-6 py-3 rounded-lg hover:bg-[#ea580c] transition font-semibold inline-block"
                >
                  Visit Our YouTube Channel
                </a>
              </div>
            </div>
          </motion.div>
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
              Join Our Satisfied Clients
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Experience the same quality and professionalism that our clients rave about
            </p>
            <a
              href="/quote"
              className="bg-[#f97316] text-white px-8 py-4 rounded-lg hover:bg-[#ea580c] transition font-semibold text-lg inline-block"
            >
              Start Your Project Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default Testimonials