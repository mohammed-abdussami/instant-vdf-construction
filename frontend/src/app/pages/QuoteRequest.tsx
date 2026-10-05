import { useState } from 'react'
import { motion } from 'framer-motion'
import { FileText, Send } from 'lucide-react'
import toast from 'react-hot-toast'
import SEO from '@/app/components/common/SEO'
import PageBanner from '@/app/components/common/PageBanner'
import CTASection from '@/app/components/home/CTASection'
import { Input, Select } from '@/app/components/ui/input'
import { Textarea } from '@/app/components/ui/textarea'
import { Button } from '@/app/components/ui/button'
import { quoteService } from '@/app/services/quoteService'
import type { QuotePayload } from '@/app/services/quoteService'
import { useScrollTop } from '@/app/hooks/useScrollTop'
import { sanitizePhone, isValidIndianPhone } from '@/app/utils/phone'

const EMPTY: QuotePayload = {
  name:'', phone:'', email:'', company:'',
  service:'', area:'', location:'', timeline:'', description:''
}

const SERVICE_OPTS = [
  { value:'',                 label:'Select a service...' },
  { value:'VDF Flooring',     label:'VDF Flooring' },
  { value:'Tremix Flooring',  label:'Tremix Flooring' },
  { value:'Laser Screeding',  label:'Laser Screeding' },
  { value:'RCC Roads',        label:'RCC Roads & Pavement' },
  { value:'Waterproofing',    label:'Waterproofing' },
  { value:'Groove Cutting',   label:'Groove Cutting' },
  { value:'Other',            label:'Other' },
]

const TIMELINE_OPTS = [
  { value:'',             label:'Select timeline...' },
  { value:'Within 1-5 Days', label:'Within 1-7 Days' },
  { value:'1-5 weeks ',   label:'1-5 weeks' },
  { value:'1 month',   label:'1 month' },
  { value:'Flexible',     label:'Flexible / Not sure yet' },
]

export default function QuoteRequest() {
  useScrollTop()
  const [form, setForm]   = useState<QuotePayload>(EMPTY)
  const [loading, setLoading] = useState(false)
  const [done, setDone]   = useState(false)

  const set = (field: keyof QuotePayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }))

  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, phone: sanitizePhone(e.target.value) }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.service) {
      toast.error('Please fill in Name, Phone, and Service.')
      return
    }
    if (!isValidIndianPhone(form.phone)) {
      toast.error('Please enter a valid 10-digit mobile number.')
      return
    }
    setLoading(true)
    try {
      await quoteService.submit(form)
      setDone(true)
      toast.success('✅ Quote request submitted! We will respond within 24 hours.')
      setForm(EMPTY)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } catch {
      toast.error('Failed to submit. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SEO
        title="Request a Free Quote"
        description="Request a free quote for VDF Flooring, Tremix Flooring, or RCC Road construction in Hyderabad. We respond within 24 hours."
      />
      <PageBanner
        title="Request a Free Quote"
        subtitle="Fill in your project details — we'll send a detailed quote within 24 hours"
        breadcrumbs={[{ label: 'Get Quote' }]}
      />

      <section className="section-padding bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Success message */}
          {done && (
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8 text-center"
            >
              <div className="text-4xl mb-2">✅</div>
              <h3 className="font-bold text-green-800 text-lg mb-1">Quote Request Received!</h3>
              <p className="text-green-700 text-sm">
                We will contact you with a detailed quote within 24 hours.
              </p>
            </motion.div>
          )}

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10"
            style={{ borderTop: '4px solid #F97316' }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: '#F97316' }}
              >
                <FileText size={22} className="text-white" />
              </div>
              <div>
                <h2 className="font-black text-xl text-[#1e2a3a]">Project Details</h2>
                <p className="text-gray-400 text-xs mt-0.5">All fields marked * are required</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Row 1: Name + Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Your Name *"
                  id="name"
                  placeholder="Full name"
                  value={form.name}
                  onChange={set('name')}
                  required
                />
                <Input
                  label="Phone / WhatsApp *"
                  id="phone"
                  type="tel"
                  inputMode="numeric"
                  autoComplete="off"
                  maxLength={10}
                  placeholder="98765 43210"
                  value={form.phone}
                  onChange={setPhone}
                  required
                />
              </div>

              {/* Row 2: Email + Company */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Email"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={set('email')}
                />
                <Input
                  label="Company / Organisation"
                  id="company"
                  placeholder="Company name (optional)"
                  value={form.company}
                  onChange={set('company')}
                />
              </div>

              {/* Service */}
              <Select
                label="Service Required *"
                id="service"
                options={SERVICE_OPTS}
                value={form.service}
                onChange={set('service')}
                required
              />

              {/* Row 3: Area + Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Approx Area (sqft / km)"
                  id="area"
                  placeholder="e.g. 15,000 sqft"
                  value={form.area}
                  onChange={set('area')}
                />
                <Input
                  label="Project Location"
                  id="location"
                  placeholder="City / Area in Telangana"
                  value={form.location}
                  onChange={set('location')}
                />
              </div>

              {/* Timeline */}
              <Select
                label="Expected Timeline"
                id="timeline"
                options={TIMELINE_OPTS}
                value={form.timeline}
                onChange={set('timeline')}
              />

              {/* Description */}
              <Textarea
                label="Project Description"
                id="description"
                rows={5}
                placeholder="Describe your project in detail — type of facility, floor thickness, special requirements, current site condition..."
                value={form.description}
                onChange={set('description')}
              />

              <Button
                type="submit"
                loading={loading}
                className="w-full py-4 rounded-xl justify-center text-base"
              >
                <Send size={16} /> Submit Quote Request
              </Button>
            </form>
          </motion.div>

          {/* Trust note */}
          <p className="text-center text-xs text-gray-400 mt-6">
            🔒 Your information is secure and will never be shared with third parties.
            We respond within 24 hours with a detailed written quotation.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}