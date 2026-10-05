import { Routes, Route } from 'react-router-dom'

import MainLayout from '@/app/layouts/MainLayout'
import AdminLayout from '@/app/layouts/AdminLayout'
import AdminDashboard from '@/app/pages/AdminDashboard'


import Home from '@/app/pages/HomePage'
import About from '@/app/pages/About'
import Services from '@/app/pages/Services'
import ServiceDetailPage from '@/app/pages/ServiceDetailPage'
import Projects from '@/app/pages/Projects'
import Gallery from '@/app/pages/Gallery'
import Contact from '@/app/pages/Contact'
import Blogs from '@/app/pages/Blog'
import FAQ from '@/app/pages/FAQ'
import Testimonials from '@/app/pages/Testimonials'
import Industries from '@/app/pages/Industries'
import QuoteRequest from '@/app/pages/QuoteRequest'
import NotFound from '@/app/pages/NotFound'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/quote" element={<QuoteRequest />} />
      </Route>

      {/* Admin — no Navbar/Footer */}
      <Route element={<AdminLayout />}>
        <Route path="/admin" element={<AdminDashboard />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}