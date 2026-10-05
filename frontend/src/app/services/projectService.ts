import { PROJECTS_DATA } from '@/app/constants/projectsData'
import type { Project } from '@/app/types/project.types'

export const projectService = {
  getAll: (): Project[] => PROJECTS_DATA,
  getByType: (type: string): Project[] =>
    type === 'All' ? PROJECTS_DATA : PROJECTS_DATA.filter(p => p.type === type),
  getById: (id: number): Project | undefined =>
    PROJECTS_DATA.find(p => p.id === id),
}