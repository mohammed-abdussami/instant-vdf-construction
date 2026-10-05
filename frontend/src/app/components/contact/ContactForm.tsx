import { useState } from 'react'
import { Send } from 'lucide-react'
import toast from 'react-hot-toast'
import { Input, Select } from '@/app/components/ui/input'
import { Textarea } from '@/app/components/ui/textarea'
import { Button } from '@/app/components/ui/button'
import { contactService } from '@/app/services/contactService'
import type { ContactPayload } from '@/app/services/contactService'
import { sanitizePhone, isValidIndianPhone } from '@/app/utils/phone'

const EMPTY: ContactPayload = { name:'', phone:'', email:'', service:'', location:'', message:'' }

const SERVICE_OPTIONS = [
  { value:'', label:'Select a service...' },
  { value:'VDF Flooring',    label:'VDF Flooring' },
  { value:'Tremix Flooring', label:'Tremix Flooring' },
  { value:'Laser Screeding', label:'Laser Screeding' },
  { value:'RCC Roads',       label:'RCC Roads & Pavement' },
  { value:'Waterproofing',   label:'Waterproofing' },
  { value:'Groove Cutting',  label:'Groove Cutting' },
  { value:'Other',           label:'Other' },
]

export default function ContactForm() {
  const [form, setForm]     = useState<ContactPayload>(EMPTY)
  const [loading, setLoading] = useState(false)

  const set = (field: keyof ContactPayload) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }))

  const setPhone = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, phone: sanitizePhone(e.target.value) }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) {
      toast.error('Please fill in Name and Phone.')
      return
    }
    if (!isValidIndianPhone(form.phone)) {
      toast.error('Please enter a valid 10-digit mobile number.')
      return
    }
    setLoading(true)
    try {
      await contactService.submit(form)
      toast.success('✅ Message sent! We will contact you within 2 hours.')
      setForm(EMPTY)
    } catch {
      toast.error('Failed to send. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8"
      style={{ borderTop: '4px solid #F97316' }}
    >
      <h4 className="font-black text-xl text-[#1e2a3a] mb-6">Send Us a Message</h4>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Input label="Your Name *" id="name" placeholder="Full name"
            value={form.name} onChange={set('name')} required />
          <Input label="Phone *" id="phone" type="tel" inputMode="numeric" autoComplete="off"
            placeholder="98765 43210" maxLength={10}
            value={form.phone} onChange={setPhone} required />
        </div>

        <Input label="Email" id="email" type="email" placeholder="your@email.com"
          value={form.email} onChange={set('email')} />

        <Select
          label="Service Required"
          id="service"
          options={SERVICE_OPTIONS}
          value={form.service}
          onChange={set('service')}
        />

        <Input label="Project Location" id="location" placeholder="City / Area in Telangana"
          value={form.location} onChange={set('location')} />

        <Textarea
          label="Project Details"
          id="message"
          rows={4}
          placeholder="Describe your project — area (sqft), type, timeline..."
          value={form.message}
          onChange={set('message')}
        />

        <Button type="submit" loading={loading} className="w-full py-4 rounded-xl justify-center">
          <Send size={16} /> Send Message
        </Button>
      </form>
    </div>
  )
}