import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import tremixImage from '@/assets/images/tremix-flooring.jpg'

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on the quality of materials and workmanship',
    },
    {
      icon: Shield,
      title: 'Safety Standards',
      description: 'Strict adherence to safety protocols on every project',
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Your satisfaction is our top priority',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Using latest technology and construction methods',
    },
  ];

  const milestones = [
    { year: '2005', event: 'Company Founded' },
    { year: '2010', event: '100+ Projects Completed' },
    { year: '2015', event: 'Expanded to Multiple Cities' },
    { year: '2020', event: '600+ Happy Clients' },
    { year: '2026', event: '1200+ Successful Projects' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src={tremixImage}
            alt="About Us"
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
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Building Excellence Since 2007
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-[#0f172a] mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 text-lg">
                INSTANT VDF CONSTRUCTION was founded with a vision to revolutionize the 
                construction flooring industry. What started as a small team of dedicated 
                professionals has grown into one of the most trusted names in industrial 
                and commercial flooring solutions.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                Over the years, we have successfully completed 600+ projects across various 
                sectors, earning the trust of clients through our commitment to quality, 
                timely delivery, and exceptional customer service.
              </p>
              <p className="text-gray-600 text-lg">
                Today, we continue to set industry standards with our innovative approaches, 
                skilled workforce, and state-of-the-art equipment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <ImageWithFallback
                src="/images/const1.jpg"
                alt="Construction Site"
                className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-lg flex items-center justify-center mb-6">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Our Mission</h3>
              <p className="text-gray-600 text-lg">
                To deliver superior flooring solutions that exceed client expectations through 
                innovation, quality craftsmanship, and unwavering commitment to excellence. We 
                strive to build lasting relationships based on trust and reliability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#0f172a] to-[#1e40af] rounded-lg flex items-center justify-center mb-6">
                <Eye className="text-white" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-[#0f172a] mb-4">Our Vision</h3>
              <p className="text-gray-600 text-lg">
                To be the most trusted and preferred construction flooring company, setting 
                industry benchmarks through continuous innovation, sustainable practices, and 
                exceptional service delivery across all sectors we serve.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">Our Core Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              These principles guide every decision we make and every project we undertake
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="text-white" size={36} />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-300 text-lg">Key milestones in our growth story</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 mb-8"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-2xl font-bold text-[#f97316]">{milestone.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-[#f97316] rounded-full" />
                <div className="flex-1">
                  <div className="bg-white/10 p-4 rounded-lg">
                    <p className="text-lg">{milestone.event}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-[#0f172a] mb-6">Our Expert Team</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
              Our success is driven by a team of highly skilled professionals who bring years 
              of experience, technical expertise, and a passion for excellence to every project. 
              From project managers to skilled technicians, every team member is committed to 
              delivering outstanding results.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-white" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">50+</h3>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#0f172a] to-[#1e40af] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">22+</h3>
                <p className="text-gray-600">Years Average Experience</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="text-white" size={48} />
                </div>
                <h3 className="text-2xl font-bold text-[#0f172a] mb-2">100%</h3>
                <p className="text-gray-600">Certified Professionals</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default About
