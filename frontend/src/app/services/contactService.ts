import { api } from '@/app/services/api'
import type { LeadQueryParams, LeadStatus, PageResponse } from '@/app/services/quoteService'

export interface ContactPayload {
  name: string; phone: string; email: string
  service: string; location: string; message: string
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

export const contactService = {

  submit: async (data: ContactPayload) => {
    // 1. Save to backend (Postgres via Spring Boot)
    const result = await api.post<{ success: boolean; id: number }>('/contacts/submit', data)

    // 2. Send email alert via Web3Forms (unchanged — client-side notification only)
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: import.meta.env.VITE_WEB3FORMS_KEY,
        subject:    `New Contact Inquiry — ${data.name}`,
        from_name:  'Instant VDF Construction Website',
        name:       data.name,
        phone:      data.phone,
        email:      data.email    || 'Not provided',
        service:    data.service  || 'Not specified',
        location:   data.location || 'Not specified',
        message:    data.message  || 'No message',
      }),
    })

    return result
  },

  getAll: async (token: string, params: LeadQueryParams = {}) => {
    return api.authGet<PageResponse<any>>(`/contacts${toQueryString(params)}`, token)
  },

  updateStatus: async (id: number, status: LeadStatus, token: string) => {
    return api.authPut<any>(`/contacts/${id}/status`, { status }, token)
  },

  delete: async (id: number, token: string) => {
    return api.authDelete<{ success: boolean; id: number }>(`/contacts/${id}`, token)
  },
}