import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  LogIn, LogOut, Mail, FileText,
  RefreshCw, CheckCircle, Clock, TrendingUp, Trash2,
  Search, ChevronLeft, ChevronRight, CalendarDays, CalendarRange
} from 'lucide-react'
import { Input, Select } from '@/app/components/ui/input'
import { Button } from '@/app/components/ui/button'
import { Badge } from '@/app/components/ui/badge'
import { contactService } from '@/app/services/contactService'
import { quoteService, type LeadStatus, type PageResponse } from '@/app/services/quoteService'

// ── Status config ────────────────────────────────────────────
const STATUS_OPTIONS: { value: LeadStatus; label: string }[] = [
  { value: 'NEW',         label: 'New' },
  { value: 'IN_PROGRESS', label: 'In Progress' },
  { value: 'CONTACTED',   label: 'Contacted' },
  { value: 'APPROVED',    label: 'Approved' },
  { value: 'COMPLETED',   label: 'Completed' },
  { value: 'REJECTED',    label: 'Rejected' },
]

const STATUS_BADGE_VARIANT: Record<LeadStatus, 'orange' | 'navy' | 'green' | 'gray'> = {
  NEW:         'orange',
  IN_PROGRESS: 'navy',
  CONTACTED:   'navy',
  APPROVED:    'green',
  COMPLETED:   'green',
  REJECTED:    'gray',
}

type QuickFilter = 'all' | 'today' | 'week' | 'new' | 'approved'

const QUICK_FILTERS: { key: QuickFilter; label: string; icon: React.ReactNode }[] = [
  { key: 'all',      label: "All Leads",     icon: <FileText size={13} /> },
  { key: 'today',    label: "Today's Leads", icon: <CalendarDays size={13} /> },
  { key: 'week',     label: 'This Week',     icon: <CalendarRange size={13} /> },
  { key: 'new',      label: 'New',           icon: <Clock size={13} /> },
  { key: 'approved', label: 'Approved',      icon: <CheckCircle size={13} /> },
]

// ── Login form ────────────────────────────────────────────────
function LoginForm({ onLogin }: { onLogin: (token: string) => void }) {
  const [email,    setEmail]    = useState('')
  const [password, setPassword] = useState('')
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      const BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'
      const res  = await fetch(`${BASE}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (!res.ok) throw new Error('Invalid credentials')
      const data = await res.json()
      localStorage.setItem('ivc_admin_token', data.token)
      onLogin(data.token)
    } catch {
      setError('Invalid email or password. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f1923] px-4">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl"
        style={{ borderTop: '4px solid #F97316' }}
      >
        <div className="text-center mb-7">
          <div
            className="w-14 h-14 rounded-xl mx-auto mb-4 flex items-center justify-center text-white font-black text-base"
            style={{ background: '#F97316' }}
          >
            IVC
          </div>
          <h2 className="font-black text-xl text-[#1e2a3a]">Admin Login</h2>
          <p className="text-gray-400 text-sm mt-1">Instant VDF Construction</p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm text-center px-4 py-3 rounded-xl mb-4">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email"
            id="email"
            type="email"
            placeholder="admin@email.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <Input
            label="Password"
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
          />
          <Button type="submit" loading={loading} className="w-full py-3 justify-center">
            <LogIn size={16} /> Login to Dashboard
          </Button>
        </form>
      </motion.div>
    </div>
  )
}

// ── Stat card ─────────────────────────────────────────────────
function StatCard({ label, value, icon, color }: {
  label: string; value: number; icon: React.ReactNode; color: string
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-3">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
             style={{ background: color }}>
          {icon}
        </div>
        <span className="font-black text-3xl text-[#1e2a3a]">{value}</span>
      </div>
      <p className="text-xs text-gray-500 font-medium">{label}</p>
    </div>
  )
}

// ── Sortable column header ───────────────────────────────────
function SortableHeader({ label, field, sortBy, sortDir, onSort }: {
  label: string; field: string
  sortBy: string; sortDir: 'asc' | 'desc'
  onSort: (field: string) => void
}) {
  const active = sortBy === field
  return (
    <th
      onClick={() => onSort(field)}
      className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider whitespace-nowrap cursor-pointer select-none hover:text-gray-600"
    >
      {label}{active ? (sortDir === 'asc' ? ' ▲' : ' ▼') : ''}
    </th>
  )
}

// ── Data table ────────────────────────────────────────────────
function DataTable({
  rows, type, onDelete, onStatusChange,
  sortBy, sortDir, onSort,
}: {
  rows: any[]; type: 'contacts' | 'quotes'
  onDelete: (id: number) => void
  onStatusChange: (id: number, status: LeadStatus) => void
  sortBy: string; sortDir: 'asc' | 'desc'
  onSort: (field: string) => void
}) {
  if (rows.length === 0) {
    return (
      <div className="p-16 text-center text-gray-400">
        <div className="text-4xl mb-3">📭</div>
        <p className="text-sm font-medium">No {type} match the current filters</p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">#</th>
            <SortableHeader label="Name"     field="name"     sortBy={sortBy} sortDir={sortDir} onSort={onSort} />
            <SortableHeader label="Phone"    field="phone"    sortBy={sortBy} sortDir={sortDir} onSort={onSort} />
            <SortableHeader label="Service"  field="service"  sortBy={sortBy} sortDir={sortDir} onSort={onSort} />
            {type === 'quotes' && (
              <SortableHeader label="Area" field="area" sortBy={sortBy} sortDir={sortDir} onSort={onSort} />
            )}
            <SortableHeader label="Location" field="location" sortBy={sortBy} sortDir={sortDir} onSort={onSort} />
            <SortableHeader label="Status"   field="status"   sortBy={sortBy} sortDir={sortDir} onSort={onSort} />
            <SortableHeader label="Date"     field="createdAt" sortBy={sortBy} sortDir={sortDir} onSort={onSort} />
            <th className="px-4 py-3"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {rows.map((row: any, i: number) => (
            <tr key={row.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-gray-400 text-xs">{i + 1}</td>
              <td className="px-4 py-3 font-semibold text-[#1e2a3a] whitespace-nowrap">{row.name}</td>
              <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.phone}</td>
              <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.service || '—'}</td>
              {type === 'quotes' && (
                <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.area || '—'}</td>
              )}
              <td className="px-4 py-3 text-gray-600 whitespace-nowrap">{row.location || '—'}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <Badge variant={STATUS_BADGE_VARIANT[row.status as LeadStatus] ?? 'gray'}>
                    {row.status}
                  </Badge>
                  <select
                    value={row.status}
                    onChange={e => onStatusChange(row.id, e.target.value as LeadStatus)}
                    className="text-xs border border-gray-200 rounded-lg px-2 py-1 bg-white focus:outline-none focus:border-orange-400"
                    title="Update status"
                  >
                    {STATUS_OPTIONS.map(s => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </div>
              </td>
              <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">
                {row.createdAt
                  ? new Date(row.createdAt).toLocaleDateString('en-IN')
                  : '—'}
              </td>
              <td className="px-4 py-3 text-right">
                <button
                  onClick={() => {
                    if (window.confirm(`Delete this ${type === 'contacts' ? 'inquiry' : 'quote request'} from ${row.name}? This cannot be undone.`)) {
                      onDelete(row.id)
                    }
                  }}
                  title="Delete"
                  className="text-gray-300 hover:text-red-500 transition-colors p-1.5 rounded-lg hover:bg-red-50"
                >
                  <Trash2 size={15} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// ── Pagination bar ────────────────────────────────────────────
function PaginationBar({
  page, totalPages, totalElements, pageSize,
  onPageChange, onPageSizeChange,
}: {
  page: number; totalPages: number; totalElements: number; pageSize: 10 | 20
  onPageChange: (page: number) => void
  onPageSizeChange: (size: 10 | 20) => void
}) {
  const start = totalElements === 0 ? 0 : page * pageSize + 1
  const end = Math.min((page + 1) * pageSize, totalElements)

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-4 py-3 border-t border-gray-100 text-sm">
      <div className="flex items-center gap-3 text-gray-500 text-xs">
        <span>{start}–{end} of {totalElements}</span>
        <div className="flex items-center gap-1">
          {([10, 20] as const).map(size => (
            <button
              key={size}
              onClick={() => onPageSizeChange(size)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                pageSize === size ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {size}/page
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          onClick={() => onPageChange(Math.max(page - 1, 0))}
          disabled={page === 0}
          className="p-1.5 rounded-lg text-gray-400 hover:text-orange-500 hover:bg-orange-50 disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-xs text-gray-500 px-2">
          Page {totalPages === 0 ? 0 : page + 1} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(Math.min(page + 1, Math.max(totalPages - 1, 0)))}
          disabled={page + 1 >= totalPages}
          className="p-1.5 rounded-lg text-gray-400 hover:text-orange-500 hover:bg-orange-50 disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  )
}

const EMPTY_PAGE: PageResponse<any> = { content: [], totalElements: 0, totalPages: 0, number: 0, size: 10 }

// ── Main dashboard ────────────────────────────────────────────
export default function AdminDashboard() {
  const [token, setToken] = useState(localStorage.getItem('ivc_admin_token') || '')
  const [tab,   setTab]   = useState<'contacts' | 'quotes'>('contacts')

  const [contactsPage, setContactsPage] = useState<PageResponse<any>>(EMPTY_PAGE)
  const [quotesPage,   setQuotesPage]   = useState<PageResponse<any>>(EMPTY_PAGE)
  const [loading, setLoading] = useState(false)

  // Unfiltered counts, used for the stat cards / summary banner
  const [totalContacts, setTotalContacts] = useState(0)
  const [totalQuotes,   setTotalQuotes]   = useState(0)
  const [newContacts,   setNewContacts]   = useState(0)
  const [newQuotes,     setNewQuotes]     = useState(0)

  const [page,       setPage]       = useState(0)
  const [pageSize,   setPageSize]   = useState<10 | 20>(10)
  const [search,     setSearch]     = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [quickFilter, setQuickFilter] = useState<QuickFilter>('all')
  const [sortBy,     setSortBy]     = useState('createdAt')
  const [sortDir,    setSortDir]    = useState<'asc' | 'desc'>('desc')

  // Debounce free-text search
  useEffect(() => {
    const t = setTimeout(() => { setSearch(searchInput); setPage(0) }, 400)
    return () => clearTimeout(t)
  }, [searchInput])

  const activeParams = useCallback(() => {
    const params: Record<string, any> = {
      page, size: pageSize, search: search || undefined,
      sortBy, sortDir,
    }
    if (quickFilter === 'today')    params.dateFilter = 'today'
    if (quickFilter === 'week')     params.dateFilter = 'week'
    if (quickFilter === 'new')      params.status = 'NEW'
    if (quickFilter === 'approved') params.status = 'APPROVED'
    return params
  }, [page, pageSize, search, sortBy, sortDir, quickFilter])

  const fetchData = useCallback(async () => {
    if (!token) return
    setLoading(true)
    try {
      const params = activeParams()
      const [c, q] = await Promise.all([
        contactService.getAll(token, params),
        quoteService.getAll(token, params),
      ])
      setContactsPage(c)
      setQuotesPage(q)

      // Unfiltered counts for the stat cards / summary banner
      const [cAll, qAll, cNew, qNew] = await Promise.all([
        contactService.getAll(token, { page: 0, size: 10 }),
        quoteService.getAll(token, { page: 0, size: 10 }),
        contactService.getAll(token, { page: 0, size: 10, status: 'NEW' }),
        quoteService.getAll(token, { page: 0, size: 10, status: 'NEW' }),
      ])
      setTotalContacts(cAll.totalElements)
      setTotalQuotes(qAll.totalElements)
      setNewContacts(cNew.totalElements)
      setNewQuotes(qNew.totalElements)
    } catch {
      localStorage.removeItem('ivc_admin_token')
      setToken('')
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, activeParams])

  useEffect(() => { if (token) fetchData() }, [token, fetchData])

  const handleDelete = async (id: number) => {
    try {
      if (tab === 'contacts') {
        await contactService.delete(id, token)
      } else {
        await quoteService.delete(id, token)
      }
      fetchData()
    } catch {
      alert('Failed to delete. Please try again.')
    }
  }

  const handleStatusChange = async (id: number, status: LeadStatus) => {
    const setPageState = tab === 'contacts' ? setContactsPage : setQuotesPage
    // optimistic update
    setPageState(prev => ({
      ...prev,
      content: prev.content.map(r => (r.id === id ? { ...r, status } : r)),
    }))
    try {
      if (tab === 'contacts') {
        await contactService.updateStatus(id, status, token)
      } else {
        await quoteService.updateStatus(id, status, token)
      }
      fetchData()
    } catch {
      alert('Failed to update status. Please try again.')
      fetchData()
    }
  }

  const handleSort = (field: string) => {
    if (sortBy === field) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))
    } else {
      setSortBy(field)
      setSortDir('desc')
    }
    setPage(0)
  }

  const logout = () => {
    localStorage.removeItem('ivc_admin_token')
    setToken('')
  }

  if (!token) return <LoginForm onLogin={setToken} />

  const currentPage = tab === 'contacts' ? contactsPage : quotesPage

  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── Top bar ── */}
      <div className="bg-[#1e2a3a] text-white px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg flex items-center justify-center font-black text-sm shrink-0"
               style={{ background: '#F97316' }}>
            IVC
          </div>
          <div>
            <p className="font-bold text-sm leading-tight">Admin Dashboard</p>
            <p className="text-xs text-gray-400 leading-tight">Instant VDF Construction</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={fetchData}
            disabled={loading}
            className="flex items-center gap-1.5 text-xs bg-white/10 hover:bg-white/20 px-3 py-2 rounded-lg transition-colors disabled:opacity-50"
          >
            <RefreshCw size={13} className={loading ? 'animate-spin' : ''} />
            Refresh
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-1.5 text-xs bg-red-500/80 hover:bg-red-500 px-3 py-2 rounded-lg transition-colors"
          >
            <LogOut size={13} /> Logout
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total Inquiries"  value={totalContacts} icon={<Mail size={18}/>}       color="#F97316" />
          <StatCard label="New Inquiries"    value={newContacts}   icon={<Clock size={18}/>}       color="#1e2a3a" />
          <StatCard label="Quote Requests"   value={totalQuotes}   icon={<FileText size={18}/>}    color="#F97316" />
          <StatCard label="New Quotes"       value={newQuotes}     icon={<TrendingUp size={18}/>}  color="#1e2a3a" />
        </div>

        {/* ── Summary row ── */}
        {(newContacts > 0 || newQuotes > 0) && (
          <div className="bg-orange-50 border border-orange-200 rounded-xl px-5 py-3 mb-6 flex items-center gap-3">
            <CheckCircle size={18} className="text-orange-500 shrink-0" />
            <p className="text-orange-700 text-sm font-medium">
              You have{' '}
              {newContacts > 0 && <strong>{newContacts} new contact {newContacts === 1 ? 'inquiry' : 'inquiries'}</strong>}
              {newContacts > 0 && newQuotes > 0 && ' and '}
              {newQuotes > 0 && <strong>{newQuotes} new quote {newQuotes === 1 ? 'request' : 'requests'}</strong>}
              {' '}waiting for your response.
            </p>
          </div>
        )}

        {/* ── Quick filters ── */}
        <div className="flex flex-wrap gap-2 mb-4">
          {QUICK_FILTERS.map(f => (
            <button
              key={f.key}
              onClick={() => { setQuickFilter(f.key); setPage(0) }}
              className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg transition-colors ${
                quickFilter === f.key
                  ? 'bg-[#1e2a3a] text-white'
                  : 'bg-white border border-gray-200 text-gray-500 hover:border-orange-300 hover:text-orange-500'
              }`}
            >
              {f.icon}{f.label}
            </button>
          ))}
        </div>

        {/* ── Table card ── */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

          {/* Tabs */}
          <div className="flex border-b border-gray-100">
            {([
              { key: 'contacts', label: `Contact Inquiries (${totalContacts})`, icon: <Mail size={14}/> },
              { key: 'quotes',   label: `Quote Requests (${totalQuotes})`,      icon: <FileText size={14}/> },
            ] as const).map(t => (
              <button
                key={t.key}
                onClick={() => { setTab(t.key); setPage(0) }}
                className={`flex items-center gap-2 px-6 py-4 text-sm font-semibold transition-colors border-b-2 ${
                  tab === t.key
                    ? 'text-orange-500 border-orange-500'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {t.icon}{t.label}
              </button>
            ))}
          </div>

          {/* Search + sort */}
          <div className="flex flex-col sm:flex-row gap-3 px-4 py-3 border-b border-gray-50">
            <div className="relative flex-1">
              <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-300" />
              <input
                value={searchInput}
                onChange={e => setSearchInput(e.target.value)}
                placeholder="Search by name, phone, email, service, location..."
                className="w-full pl-9 pr-4 py-2.5 text-sm border border-gray-200 rounded-xl bg-gray-50 focus:outline-none focus:border-orange-400 focus:bg-white transition-colors"
              />
            </div>
            <Select
              value={sortBy}
              onChange={e => { setSortBy(e.target.value); setPage(0) }}
              className="sm:w-48"
              options={[
                { value: 'createdAt', label: 'Sort: Date' },
                { value: 'name',      label: 'Sort: Name' },
                { value: 'status',    label: 'Sort: Status' },
                { value: 'service',   label: 'Sort: Service' },
                { value: 'location',  label: 'Sort: Location' },
              ]}
            />
            <button
              onClick={() => setSortDir(d => (d === 'asc' ? 'desc' : 'asc'))}
              className="px-3 py-2.5 text-xs font-semibold border border-gray-200 rounded-xl text-gray-500 hover:border-orange-300 hover:text-orange-500 transition-colors whitespace-nowrap"
            >
              {sortDir === 'asc' ? 'Ascending' : 'Descending'}
            </button>
          </div>

          {loading
            ? <div className="p-16 text-center"><div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto" /></div>
            : <DataTable
                rows={currentPage.content}
                type={tab}
                onDelete={handleDelete}
                onStatusChange={handleStatusChange}
                sortBy={sortBy}
                sortDir={sortDir}
                onSort={handleSort}
              />
          }

          {!loading && (
            <PaginationBar
              page={page}
              totalPages={currentPage.totalPages}
              totalElements={currentPage.totalElements}
              pageSize={pageSize}
              onPageChange={setPage}
              onPageSizeChange={size => { setPageSize(size); setPage(0) }}
            />
          )}
        </div>

      </div>
    </div>
  )
}