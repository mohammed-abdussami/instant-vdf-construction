import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
export function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: 'Understanding VDF Flooring: Benefits and Applications',
      excerpt: 'Discover why VDF flooring is the preferred choice for industrial applications and how it can benefit your business with superior strength and durability.',
      category: 'VDF Flooring',
      author: 'Mohammed Ahmad',
      date: 'May 20, 2026',
      image: '/images/head1.jpg',
    },
    {
      id: 2,
      title: 'Tremix vs Traditional Flooring: A Comprehensive Comparison',
      excerpt: 'Learn about the key differences between tremix flooring and traditional concrete flooring methods, and which one is right for your project.',
      category: 'Tremix Flooring',
      author: 'Technical Team',
      date: 'May 15, 2026',
      image: '/images/trim3.jpg',
    },
    {
      id: 3,
      title: 'Maintenance Tips for Industrial Concrete Floors',
      excerpt: 'Essential maintenance practices to extend the life of your industrial concrete flooring and maintain its performance over years.',
      category: 'Maintenance',
      author: 'Expert Team',
      date: 'May 10, 2026',
      image: '/images/img.jpg'
    },
    {
      id: 4,
      title: 'Choosing the Right Flooring for Warehouses',
      excerpt: 'A detailed guide on selecting the appropriate flooring system for warehouse and logistics facilities based on load requirements and usage patterns.',
      category: 'Industry Insights',
      author: 'Mohammed Ahmad',
      date: 'May 5, 2026',
      image: '/images/ware3.jpg',
    },
    {
      id: 5,
      title: 'RCC Flooring for Heavy-Duty Applications',
      excerpt: 'Explore how reinforced cement concrete flooring provides maximum strength for facilities requiring exceptional load-bearing capacity.',
      category: 'RCC Flooring',
      author: 'Technical Team',
      date: 'April 28, 2026',
      image: '/images/road6.jpg',
    },
    {
      id: 6,
      title: 'The Cost-Benefit Analysis of Quality Flooring',
      excerpt: 'Understanding the long-term value of investing in high-quality flooring systems versus cheaper alternatives for your business.',
      category: 'Business Tips',
      author: 'Expert Team',
      date: 'April 22, 2026',
      image: '/images/head7.jpg',
    },
  ];

  const categories = ['All', 'VDF Flooring', 'Tremix Flooring', 'RCC Flooring', 'Maintenance', 'Industry Insights', 'Business Tips'];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/head6.jpg"
            alt="Blogs"
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
            Our Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Insights, Tips, and Industry Knowledge
          </motion.p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-5 py-2 rounded-full bg-white text-[#0f172a] hover:bg-[#f97316] hover:text-white transition font-semibold text-sm"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-0"
          >
            <div className="h-80 md:h-auto">
              <ImageWithFallback
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block bg-[#f97316] text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 w-fit">
                Featured
              </span>
              <h2 className="text-3xl font-bold text-[#0f172a] mb-4">{blogPosts[0].title}</h2>
              <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{blogPosts[0].author}</span>
                </div>
              </div>
              <button className="bg-[#f97316] text-white px-6 py-3 rounded-lg hover:bg-[#ea580c] transition font-semibold inline-flex items-center gap-2 w-fit">
                Read More <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition group"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-[#f97316] text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0f172a] mb-3 group-hover:text-[#f97316] transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User size={14} />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <button className="text-[#f97316] font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f172a] to-[#1e40af]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-8">
              Get the latest industry insights, tips, and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]"
              />
              <button className="bg-[#f97316] text-white px-8 py-4 rounded-lg hover:bg-[#ea580c] transition font-semibold whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
export default Blogs