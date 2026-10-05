import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Industrial Warehouse Flooring',
      category: 'vdf',
      location: 'Mumbai, Maharashtra',
      date: '2024',
      image: '/images/ware1.jpg',
      description: 'Complete VDF flooring installation for 50,000 sq ft warehouse',
    },
    {
      id: 2,
      title: 'Commercial Complex Flooring',
      category: 'tremix',
      location: 'Pune, Maharashtra',
      date: '2024',
      image: '/images/trim4.jpg',
      description: 'Tremix flooring for multi-story commercial building',
    },
    {
      id: 3,
      title: 'Manufacturing Plant Flooring',
      category: 'rcc',
      location: 'Bangalore, Karnataka',
      date: '2023',
      image: '/images/road5.jpg',
      description: 'Heavy-duty RCC concrete flooring for manufacturing facility',
    },
    {
      id: 4,
      title: 'Logistics Center Flooring',
      category: 'vdf',
      location: 'Chennai, Tamil Nadu',
      date: '2023',
      image: '/images/ware4.jpg',
      description: 'VDF flooring for large-scale logistics distribution center',
    },
    {
      id: 5,
      title: 'Food Processing Unit',
      category: 'tremix',
      location: 'Hyderabad, Telangana',
      date: '2023',
      image: '/images/trim1.jpg',
      description: 'Hygienic tremix flooring for food processing facility',
    },
    {
      id: 6,
      title: 'Automotive Workshop',
      category: 'rcc',
      location: 'Delhi NCR',
      date: '2022',
      image: '/images/road2.jpg',
      description: 'RCC flooring for heavy vehicle maintenance workshop',
    },
    {
      id: 7,
      title: 'Groove Cutting — Industrial Floor',
      category: 'groove',
      location: 'Hyderabad, Telangana',
      date: '2023',
      image: '/images/gro2.jpg',
      description: 'Precision groove cutting for expansion joint control on an industrial floor',
    },
    {
      id: 8,
      title: 'Warehouse Concrete Flooring',
      category: 'warehouse',
      location: 'Hyderabad, Telangana',
      date: '2023',
      image: '/images/ware2.jpg',
      description: 'Flat, joint-controlled flooring designed for racking and forklift traffic',
    },
    {
      id: 9,
      title: 'Warehouse Steel Structure Flooring',
      category: 'warehouse',
      location: 'Hyderabad, Telangana',
      date: '2022',
      image: '/images/ware5.jpg',
      description: 'Concrete flooring works during pre-engineered warehouse construction',
    },
    {
      id: 10,
      title: 'Internal Road — Reinforcement & Pour',
      category: 'rcc',
      location: 'Hyderabad, Telangana',
      date: '2022',
      image: '/images/bind2.jpg',
      description: 'Reinforcement binding and slab pour for an industrial internal road',
    },
    {
      id: 11,
      title: 'RCC Road — Broom Finish',
      category: 'rcc',
      location: 'Hyderabad, Telangana',
      date: '2022',
      image: '/images/road7.jpeg',
      description: 'Broom-finished RCC road surface for improved skid resistance',
    },
    {
      id: 12,
      title: 'Rooftop Slab Concreting',
      category: 'rcc',
      location: 'Hyderabad, Telangana',
      date: '2022',
      image: '/images/top1.jpg',
      description: 'Rooftop RCC slab construction with an aerial view of the finished pour',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'vdf', label: 'VDF Flooring' },
    { id: 'tremix', label: 'Tremix Flooring' },
    { id: 'rcc', label: 'RCC Flooring' },
    { id: 'warehouse', label: 'Warehouse Flooring' },
    { id: 'groove', label: 'Groove Cutting' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/head4.jpg"
            alt="Projects"
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
            Our Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Showcasing Our Excellence in Flooring Solutions
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  filter === category.id
                    ? 'bg-[#f97316] text-white'
                    : 'bg-white text-[#0f172a] hover:bg-gray-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#f97316] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {project.category.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin size={16} className="text-[#f97316]" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar size={16} className="text-[#f97316]" />
                      <span>{project.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
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
              <div className="text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-300">Projects Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-white mb-2">2M+</div>
              <div className="text-gray-300">Sq Ft Completed</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-white mb-2">300+</div>
              <div className="text-gray-300">Happy Clients</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">On-Time Delivery</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Projects