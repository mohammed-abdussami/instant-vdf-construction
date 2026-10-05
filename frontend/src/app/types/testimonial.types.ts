export interface Testimonial {
  id: number
  name: string
  initials: string
  company: string

  location?: string

  text: string
  rating: number

  service?: string
}