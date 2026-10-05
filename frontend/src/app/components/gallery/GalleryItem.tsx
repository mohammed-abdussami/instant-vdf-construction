import { motion } from 'framer-motion'
import { ZoomIn } from 'lucide-react'

export interface GalleryItemData {
  id:    number
  src:   string
  alt:   string
  color: string
  tag:   string
}

interface GalleryItemProps {
  item:    GalleryItemData
  onClick: (item: GalleryItemData) => void
}

export default function GalleryItem({ item, onClick }: GalleryItemProps) {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden cursor-pointer group"
      style={{ height: 220 }}
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      onClick={() => onClick(item)}
    >
      {/* Photo — replace div with <img> when you have gallery photos */}
      <div className="w-full h-full flex items-center justify-center text-3xl"
           style={{ background: item.color }}>
        {/* <img src={item.src} alt={item.alt} className="w-full h-full object-cover" /> */}
        🏗️
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
        <ZoomIn size={28} className="text-white" />
        <span className="text-white text-xs font-bold">{item.tag}</span>
      </div>
    </motion.div>
  )
}