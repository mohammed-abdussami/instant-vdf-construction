import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fadeUp, staggerContainer } from '@/app/utils/animations'

// Real site photos for the rotating hero background — swap/add more anytime,
// just drop new files in public/images and add their path here.
const HERO_IMAGES = [
  '/images/const1.jpg',
  '/images/trim4.jpg',
  '/images/ware5.jpg',
  '/images/out1.jpg',
]

export default function HeroSection() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent(c => (c + 1) % HERO_IMAGES.length)
    }, 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section id="home">
      {/* ── Photo hero with dark gradient overlay ── */}
      <div className="relative flex items-center min-h-[88vh] overflow-hidden">
        {/* Rotating background photos */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${HERO_IMAGES[current]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </AnimatePresence>

        {/* Dark gradient so white text stays readable over any photo */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(15,25,35,0.88) 0%, rgba(30,42,58,0.82) 55%, rgba(22,32,48,0.88) 100%)' }}
        />

        {/* Left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1.5 z-10"
             style={{ background:'linear-gradient(to bottom,#F97316,#C62828,#F97316)' }}/>

        {/* Carousel dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? 'w-8 bg-orange-500' : 'w-1.5 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 w-full">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">

            <motion.div variants={fadeUp} className="inline-flex items-center gap-2.5 border border-orange-500/30 bg-orange-500/10 rounded-sm px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse-dot"/>
              <span className="text-orange-400 text-xs font-bold tracking-[3px] uppercase">
                Hyderabad &amp; Telangana — Est. 2015
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-white font-black leading-[1.05] mb-5"
                       style={{ fontSize:'clamp(38px,6vw,68px)' }}>
              Premium Flooring<br/>
              Solutions for Your Business
            </motion.h1>

            <motion.p variants={fadeUp} className="text-gray-300 text-lg font-medium mb-10 max-w-xl">
              VDF Flooring &nbsp;•&nbsp; Tremix Flooring &nbsp;•&nbsp; RCC Concrete Flooring
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link to="/quote">
                <button className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-base transition-all active:scale-95">
                  Get Free Quote <ArrowRight size={18}/>
                </button>
              </Link>
              <Link to="/services">
                <button className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-base hover:bg-white hover:text-[#1e2a3a] transition-all">
                  Our Services
                </button>
              </Link>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}