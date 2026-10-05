import { useEffect } from 'react'

interface SEOProps { title: string; description: string; keywords?: string }

export default function SEO({ title, description, keywords }: SEOProps) {
  useEffect(() => {
    document.title = `${title} | Instant VDF Construction`
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement
      if (!el) { el = document.createElement('meta'); el.name = name; document.head.appendChild(el) }
      el.content = content
    }
    setMeta('description', description)
    if (keywords) setMeta('keywords', keywords)
  }, [title, description, keywords])

  return null
}