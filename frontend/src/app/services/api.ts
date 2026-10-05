const BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...init,
  })
  if (!res.ok) {
    const msg = await res.text().catch(() => `HTTP ${res.status}`)
    throw new Error(msg)
  }
  return res.json()
}

export const api = {
  get:    <T>(path: string)                   => request<T>(path),
  post:   <T>(path: string, body: unknown)    => request<T>(path, { method:'POST',  body: JSON.stringify(body) }),
  put:    <T>(path: string, body: unknown)    => request<T>(path, { method:'PUT',   body: JSON.stringify(body) }),
  delete: <T>(path: string)                   => request<T>(path, { method:'DELETE' }),
  authGet:<T>(path: string, token: string)    => request<T>(path, { headers:{ 'Content-Type':'application/json', Authorization:`Bearer ${token}` } }),
  authPut:<T>(path: string, body: unknown, token: string) => request<T>(path, { method:'PUT', headers:{ 'Content-Type':'application/json', Authorization:`Bearer ${token}` }, body: JSON.stringify(body) }),
  authDelete:<T>(path: string, token: string) => request<T>(path, { method:'DELETE', headers:{ 'Content-Type':'application/json', Authorization:`Bearer ${token}` } }),

  // For binary responses (e.g. the Excel export) — skips the .json() parse that `request` does.
  authGetBlob: async (path: string, token: string): Promise<Blob> => {
    const res = await fetch(`${BASE}${path}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    if (!res.ok) {
      const msg = await res.text().catch(() => `HTTP ${res.status}`)
      throw new Error(msg)
    }
    return res.blob()
  },
}