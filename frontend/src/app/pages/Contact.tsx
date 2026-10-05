import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react'
import { ImageWithFallback } from '../components/figma/ImageWithFallback'
import toast from 'react-hot-toast'
import { contactService } from '@/app/services/contactService'
import { CONTACT } from '@/app/constants/contact'
import BusinessMap from '@/app/components/common/BusinessMap'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await contactService.submit({
        name:     formData.name,
        phone:    formData.phone,
        email:    formData.email,
        service:  formData.subject,
        location: '',
        message:  formData.message,
      })
      toast.success('✅ Message sent! We will contact you within 2 hours.')
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    } catch (err) {
      console.error(err)
      toast.error('Failed to send. Please call us directly.')
    } finally {
      setLoading(false)
    }
  }

  const contactInfo = [
    { icon: Mail,   title: 'Email Us',      content: 'instantvdfconstruction@gmail.com',   link: 'mailto:instantvdfconstruction@gmail.com' },
    { icon: Phone,  title: 'Call Us',       content: '+91 63008 41097',                     link: 'tel:+916300841097' },
    { icon: MapPin, title: 'Visit Us',      content: CONTACT.address, link: `https://maps.google.com/maps?q=${CONTACT.mapLat},${CONTACT.mapLng}` },
    { icon: Clock,  title: 'Working Hours', content: 'Mon - Sun: 7:00 AM - 11:30 PM',       link: null },
  ]

  return (
    <div>

      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="/images/call2.jpg"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0f172a]/80" />
        </div>
        <div className="container mx-auto px-4 z-10 relative text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300"
          >
            Get in Touch with Our Team
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 -mt-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-full flex items-center justify-center mx-auto mb-4">
                  <info.icon className="text-white" size={28} />
                </div>
                <h3 className="font-bold text-[#0f172a] text-lg mb-2">{info.title}</h3>
                {info.link
                  ? <a
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noreferrer' : undefined}
                      className="text-gray-600 hover:text-[#f97316] transition"
                    >
                      {info.content}
                    </a>
                  : <p className="text-gray-600">{info.content}</p>
                }
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f97316]"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#f97316] text-white px-8 py-4 rounded-lg hover:bg-[#ea580c] transition font-semibold text-lg inline-flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-[#0f172a] mb-6">Why Contact Us?</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Free Consultation', desc: 'Get expert advice on the best flooring solution for your needs' },
                    { title: 'Quick Response',    desc: 'We respond to all inquiries within 24 hours' },
                    { title: 'Detailed Quote',    desc: 'Receive a comprehensive, transparent pricing quote' },
                    { title: 'Site Visit',        desc: 'Our team can visit your site for accurate assessment' },
                  ].map(item => (
                    <div key={item.title} className="flex gap-4">
                      <div className="w-2 h-2 bg-[#f97316] rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-[#0f172a] mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-[#0f172a] mb-4">Business Hours</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Sunday:</span>
                    <span className="font-semibold">7:00 AM - 11:30 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>When Reaches the Site:</span>
                    <span className="font-semibold">DO the Work 24 Hours , Upto the time the work Done </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Also Do the Work</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">For emergency services, please call us directly</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <ImageWithFallback
                  src="/images/call.png"
                  alt="Our Work"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <h2 className="text-3xl font-bold text-[#0f172a]">Find Us Here</h2>
              <a
                href={`https://maps.google.com/maps?q=${CONTACT.mapLat},${CONTACT.mapLng}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-[#f97316] hover:text-[#ea580c] transition inline-flex items-center gap-1.5"
              >
                <MapPin size={16} /> Get Directions
              </a>
            </div>
            <BusinessMap address={CONTACT.address} lat={CONTACT.mapLat} lng={CONTACT.mapLng} height={420} />
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Contact