export interface NavLink { label: string; href: string }
export interface Stat    { num: string; label: string }

export interface ApiResponse<T = unknown> {
  success: boolean
  message: string
  data?:   T
  id?:     number
}

export interface SeoProps {
  title:       string
  description: string
  keywords?:   string
}
export interface Blog {
  id: number
  slug?: string
  title: string
  desc?: string
  excerpt?: string
  tag?: string
  category?: string
  author?: string
  date?: string
  image?: string
}

export interface FAQ {
  id?: number
  question: string
  answer: string
}

export type Status = 'idle' | 'loading' | 'success' | 'error'