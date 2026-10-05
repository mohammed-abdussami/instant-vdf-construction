import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e40af] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <Search className="text-[#f97316] mx-auto" size={120} />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-9xl font-bold text-white mb-4"
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Page Not Found
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-xl text-gray-300 mb-8 max-w-md mx-auto"
        >
          Sorry, the page you're looking for doesn't exist or has been moved.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="bg-[#f97316] text-white px-8 py-4 rounded-lg hover:bg-[#ea580c] transition font-semibold inline-flex items-center gap-2 justify-center"
          >
            <Home size={20} />
            Go to Homepage
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="bg-white text-[#0f172a] px-8 py-4 rounded-lg hover:bg-gray-100 transition font-semibold inline-flex items-center gap-2 justify-center"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="mt-12"
        >
          <p className="text-gray-400 mb-4">Quick Links:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/services" className="text-[#f97316] hover:text-[#ea580c] transition">
              Services
            </Link>
            <Link to="/projects" className="text-[#f97316] hover:text-[#ea580c] transition">
              Projects
            </Link>
            <Link to="/about" className="text-[#f97316] hover:text-[#ea580c] transition">
              About Us
            </Link>
            <Link to="/contact" className="text-[#f97316] hover:text-[#ea580c] transition">
              Contact
            </Link>
            <Link to="/quote" className="text-[#f97316] hover:text-[#ea580c] transition">
              Get Quote
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
export default NotFound