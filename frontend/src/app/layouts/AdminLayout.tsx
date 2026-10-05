import { Outlet } from 'react-router-dom'

// Admin pages use a standalone layout — no Navbar/Footer/WhatsApp button
export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Outlet />
    </div>
  )
}