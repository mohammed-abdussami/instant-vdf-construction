export interface Service {
  id: string
  slug: string
  icon: string
  title: string
  desc: string

  longDesc?: string
  areas: string
  features?: string[]
  process?: ProcessStep[]
}

export interface ProcessStep {
  step: number
  title: string
  desc: string
}