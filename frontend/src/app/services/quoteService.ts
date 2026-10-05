import { api } from '@/app/services/api'

export interface QuotePayload {
  name: string; phone: string; email: string; company: string
  service: string; area: string; location: string
  timeline: string; description: string
}

export type LeadStatus =
  | 'NEW' | 'IN_PROGRESS' | 'CONTACTED' | 'APPROVED' | 'COMPLETED' | 'REJECTED'

export interface LeadQueryParams {
  page?: number
  size?: 10 | 20
  search?: string
  status?: LeadStatus
  dateFilter?: 'today' | 'week'
  sortBy?: string
  sortDir?: 'asc' | 'desc'
}

export interface PageResponse<T> {
  content: T[]
  totalElements: number
  totalPages: number
  number: number   // current page (0-indexed)
  size: number
}

function toQueryString(params: LeadQueryParams): string {
  const search = new URLSearchParams()
  if (params.page !== undefined) search.set('page', String(params.page))
  if (params.size !== undefined) search.set('size', String(params.size))
  if (params.search) search.set('search', params.search)
  if (params.status) search.set('status', params.status)
  if (params.dateFilter) search.set('dateFilter', params.dateFilter)
  if (params.sortBy) search.set('sortBy', params.sortBy)
  if (params.sortDir) search.set('sortDir', params.sortDir)
  const qs = search.toString()
  return qs ? `?${qs}` : ''
}

export const quoteService = {

  submit: async (data: QuotePayload) => {
    // 1. Save to backend (Postgres via Spring Boot)
    const result = await api.post<{ success: boolean; id: number }>('/quotes/submit', data)

    // 2. Send email alert via Web3Forms (unchanged — client-side notification only)
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key:  import.meta.env.VITE_WEB3FORMS_KEY,
        subject:     `New Quote Request — ${data.service} — ${data.name}`,
        from_name:   'Instant VDF Construction Website',
        name:        data.name,
        phone:       data.phone,
        email:       data.email       || 'Not provided',
        company:     data.company     || 'Not provided',
        service:     data.service,
        area:        data.area        || 'Not specified',
        location:    data.location    || 'Not specified',
        timeline:    data.timeline    || 'Not specified',
        description: data.description || 'No description',
      }),
    })

    return result
  },

  getAll: async (token: string, params: LeadQueryParams = {}) => {
    return api.authGet<PageResponse<any>>(`/quotes${toQueryString(params)}`, token)
  },

  updateStatus: async (id: number, status: LeadStatus, token: string) => {
    return api.authPut<any>(`/quotes/${id}/status`, { status }, token)
  },

  delete: async (id: number, token: string) => {
    return api.authDelete<{ success: boolean; id: number }>(`/quotes/${id}`, token)
  },
}