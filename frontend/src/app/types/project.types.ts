export interface Project {
  id: number
  title: string
  type: string
  badge: string
  location: string
  area: string

  year?: string
  image?: string

  color: string

  desc?: string
}

export interface ProjectStat {
  label: string
  value: string
}