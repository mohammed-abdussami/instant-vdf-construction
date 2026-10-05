import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import type { GalleryItemData } from './GalleryItem'

interface LightboxProps {
  item:    GalleryItemData | null
  items:   GalleryItemData[]
  onClose: () => void
  onPrev:  () => void
  onNext:  () => void
}

export default function Lightbox({ item, items, onClose, onPrev, onNext }: LightboxProps) {
  if (!item) return null
  const idx = items.findIndex(i => i.id === item.id)

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white hover:text-orange-400 transition-colors z-10"
        >
          <X size={32} />
        </button>

        {/* Counter */}
        <div className="absolute top-5 left-5 text-white text-sm font-bold z-10">
          {idx + 1} / {items.length}
        </div>

        {/* Prev */}
        {idx > 0 && (
          <button
            onClick={e => { e.stopPropagation(); onPrev() }}
            className="absolute left-4 text-white hover:text-orange-400 transition-colors z-10 bg-black/30 p-2 rounded-full"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {/* Image panel */}
        <motion.div
          className="rounded-2xl overflow-hidden max-w-4xl w-full"
          style={{ height: 520, background: item.color }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={e => e.stopPropagation()}
        >
          {/* Replace with: <img src={item.src} alt={item.alt} className="w-full h-full object-cover" /> */}
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-7xl">🏗️</span>
          </div>
        </motion.div>

        {/* Next */}
        {idx < items.length - 1 && (
          <button
            onClick={e => { e.stopPropagation(); onNext() }}
            className="absolute right-4 text-white hover:text-orange-400 transition-colors z-10 bg-black/30 p-2 rounded-full"
          >
            <ChevronRight size={32} />
          </button>
        )}

        {/* Caption */}
        <div className="absolute bottom-5 text-white text-sm font-semibold bg-black/40 px-4 py-2 rounded-full">
          {item.tag}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}