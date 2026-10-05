import { useState } from 'react'
import GalleryItem, { type GalleryItemData } from './GalleryItem'
import Lightbox from './Lightbox'

const COLORS = ['#1e3a5f','#3a1e1e','#1e3a2a','#2a1e3a','#1e2a3a','#1a2a1a']
const TAGS = ['VDF Flooring','Tremix Flooring','RCC Road','Laser Screed','VDF Flooring','Waterproofing']

const GALLERY_ITEMS: GalleryItemData[] = Array.from({ length: 18 }, (_, i) => ({
  id:    i + 1,
  src:   `/images/gallery/photo-${i + 1}.jpg`,
  alt:   `Project photo ${i + 1}`,
  color: COLORS[i % 6],
  tag:   TAGS[i % 6],
}))

export default function GalleryGrid() {
  const [selected, setSelected] = useState<GalleryItemData | null>(null)
  const idx = selected ? GALLERY_ITEMS.findIndex(i => i.id === selected.id) : -1

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {GALLERY_ITEMS.map(item => (
          <GalleryItem key={item.id} item={item} onClick={setSelected} />
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-8">
        Add your project photos to{' '}
        <code className="bg-gray-100 px-2 py-0.5 rounded text-xs">public/images/gallery/</code>
      </p>

      <Lightbox
        item={selected}
        items={GALLERY_ITEMS}
        onClose={() => setSelected(null)}
        onPrev={() => idx > 0 && setSelected(GALLERY_ITEMS[idx - 1])}
        onNext={() => idx < GALLERY_ITEMS.length - 1 && setSelected(GALLERY_ITEMS[idx + 1])}
      />
    </>
  )
}