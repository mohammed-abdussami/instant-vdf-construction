import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const images = [
    {
      id: 1,
      url: '/images/img-7.jpg',
      category: 'vdf',
      title: 'VDF Flooring Project',
    },
    {
      id: 2,
      url: '/images/trim3.jpg',
      category: 'tremix',
      title: 'Tremix Flooring',
    },
    {
      id: 3,
      url: '/images/road6.jpg',
      category: 'rcc',
      title: 'RCC Concrete Floor',
    },
    {
      id: 4,
      url: '/images/rail1.jpg',
      category: 'ongoing',
      title: 'Railway Platform VDF Flooring',
    },
    {
      id: 5,
      url: '/images/head7.jpg',
      category: 'team',
      title: 'Our Expert Team',
    },
    {
      id: 6,
      url: '/images/ware.jpg',
      category: 'vdf',
      title: 'WareHouse VDF Flooring ',
    },

    // ── Tremix Flooring — additional site photos ──
    {
      id: 7,
      url: '/images/trim1.jpg',
      category: 'tremix',
      title: 'Tremix Power Trowelling',
    },
    {
      id: 8,
      url: '/images/trim2.jpg',
      category: 'tremix',
      title: 'Tremix Ride-On Trowel Finishing',
    },
    {
      id: 9,
      url: '/images/trim4.jpg',
      category: 'tremix',
      title: 'Large-Scale Tremix Flooring',
    },

    // ── RCC — road works & reinforcement ──
    {
      id: 10,
      url: '/images/road1.jpg',
      category: 'rcc',
      title: 'RCC Road Construction',
    },
    {
      id: 11,
      url: '/images/road2.jpg',
      category: 'rcc',
      title: 'RCC Road Finishing',
    },
    {
      id: 12,
      url: '/images/road3.jpg',
      category: 'rcc',
      title: 'RCC Road Power Floating',
    },
    {
      id: 13,
      url: '/images/road5.jpg',
      category: 'rcc',
      title: 'RCC Slab Reinforcement & Pour',
    },
    {
      id: 14,
      url: '/images/road7.jpeg',
      category: 'rcc',
      title: 'RCC Broom-Finish Surface',
    },
    {
      id: 15,
      url: '/images/bind1.jpg',
      category: 'rcc',
      title: 'Reinforcement Binding — Internal Road',
    },
    {
      id: 16,
      url: '/images/bind2.jpg',
      category: 'rcc',
      title: 'Reinforcement Binding — Industrial Site',
    },
    {
      id: 17,
      url: '/images/46.png',
      category: 'rcc',
      title: 'RCC Concrete Pour with Ready-Mix Truck',
    },
    {
      id: 18,
      url: '/images/34.png',
      category: 'rcc',
      title: 'RCC Power Trowel Finishing',
    },

    // ── Warehouse Flooring — new category ──
    {
      id: 19,
      url: '/images/ware1.jpg',
      category: 'warehouse',
      title: 'Warehouse Flooring — Wide Bay',
    },
    {
      id: 20,
      url: '/images/ware2.jpg',
      category: 'warehouse',
      title: 'Warehouse Flooring — Joint Layout',
    },
    {
      id: 21,
      url: '/images/ware4.jpg',
      category: 'warehouse',
      title: 'Warehouse Groove Cutting',
    },
    {
      id: 22,
      url: '/images/ware5.jpg',
      category: 'warehouse',
      title: 'Warehouse Under Construction',
    },

    // ── Groove Cutting — new category ──
    {
      id: 23,
      url: '/images/gro1.jpg',
      category: 'groove',
      title: 'Groove Cutting — Site Work',
    },
    {
      id: 24,
      url: '/images/gro2.jpg',
      category: 'groove',
      title: 'Groove Cutting — Industrial Floor',
    },
    {
      id: 25,
      url: '/images/gro3.jpg',
      category: 'groove',
      title: 'Groove Cutting — Wide View',
    },

    // ── Team / behind-the-scenes ──
    {
      id: 26,
      url: '/images/head2.jpg',
      category: 'team',
      title: 'Floor Finishing Team at Work',
    },
    {
      id: 27,
      url: '/images/head3.jpg',
      category: 'team',
      title: 'On-Site Team with Equipment',
    },

    // ── Ongoing / misc project shots ──
    {
      id: 28,
      url: '/images/out1.jpg',
      category: 'ongoing',
      title: 'Evening Concrete Pour',
    },
    {
      id: 29,
      url: '/images/top1.jpg',
      category: 'ongoing',
      title: 'Rooftop Slab — Aerial View',
    },
    {
      id: 30,
      url: '/images/sal1.jpg',
      category: 'ongoing',
      title: 'Basement / Cellar Flooring',
    },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'vdf', label: 'VDF' },
    { id: 'tremix', label: 'Tremix' },
    { id: 'rcc', label: 'RCC' },
    { id: 'warehouse', label: 'Warehouse' },
    { id: 'groove', label: 'Groove Cutting' },
    { id: 'ongoing', label: 'Government' },
    { id: 'team', label: 'Team' },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/head1.jpg"
            alt="Gallery"
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
            Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Visual Showcase of Our Work
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

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative h-80 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(image.url)}
              >
                <ImageWithFallback
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-6">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#f97316] transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="max-w-6xl max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <ImageWithFallback
                src={selectedImage}
                alt="Gallery image"
                className="w-full h-full object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
export default Gallery