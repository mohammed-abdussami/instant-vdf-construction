import type { Service, Project, Testimonial, Blog, FAQ, NavLink } from '@/app/types'
//for image importing
import tremixImage from '@/assets/images/tremix-flooring.jpg'
import vdfImage from '@/assets/images/vdf-flooring.jpg'
import rccImage from '@/assets/images/rcc.png'
import grooveImage from '@/assets/images/groove-cutting.jpg'

// ── Contact info ─────────────────────────────────────────────
export const CONTACT = {
  email:    'instantvdfconstruction@gmail.com',
  phone:    '+91 6300841097',        // ← Replace with real number
  whatsapp: '916300841097',           // ← Replace with real WhatsApp number
  address:  'Hyderabad, Telangana, India',
  youtube:  'https://www.youtube.com/@instant_vdf_construction',
  instagram:'https://www.instagram.com/instantvdfconstruction',
  twitter:  'https://x.com/IVC_Ahmad',
  facebook: 'https://www.facebook.com/people/Mohammed-Ahmad/pfbid024RScWizDxCVqEPWP12QzxkNiBPWk6xqiuTBJT6BqjcSGWTY4CKwapJqvtrgiAdXxl',
}

// ── API base URL ──────────────────────────────────────────────
export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8080/api'

// ── Nav links ─────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { label: 'Home',         href: '/' },
  { label: 'About Us',     href: '/about' },
  { label: 'Services',     href: '/services' },
  { label: 'Projects',     href: '/projects' },
  { label: 'Gallery',      href: '/gallery' },
  { label: 'Industries',   href: '/industries' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Blogs',        href: '/blogs' },
  { label: 'FAQ',          href: '/faq' },
  { label: 'Contact',      href: '/contact' },
]

// ── Stats ─────────────────────────────────────────────────────
export const STATS = [
  { num: '1200+', label: 'Projects Completed' },
  { num: '22+',  label: 'Years Experience' },
  { num: '1000+', label: 'Happy Clients' },
  { num: '50+',  label: 'Expert Team' },
]

// ── Services ──────────────────────────────────────────────────
export const SERVICES: Service[] = [
  {
    id: 'vdf', icon: vdfImage , slug: 'vdf-flooring',
    title: 'VDF Flooring',
    desc: 'High-quality Vacuum Dewatering Flooring for industrial and commercial spaces. Superior finish with steel trowel and hardener topping.',
    areas: 'Warehouses · Factories · Logistics Parks',
  },
  {
    id: 'tremix', icon: tremixImage , slug: 'tremix-flooring',
    title: 'Tremix Flooring',
    desc: 'Durable and cost-effective tremix flooring solutions for heavy-duty applications. Vibro-compacted concrete for maximum strength.',
    areas: 'Heavy Industry · Workshops · Storage',
  },
  {
    id: 'rcc', icon: 'rccImage', slug: 'rcc-flooring',
    title: 'RCC Concrete Flooring',
    desc: 'Reinforced Cement Concrete flooring for maximum strength and longevity. Used for roads, driveways and heavy traffic areas.',
    areas: 'Roads · Driveways · Parking Areas',
  },
  {
    id: 'laser', icon: '📐', slug: 'laser-screeding',
    title: 'Laser Screeding',
    desc: 'Computer-controlled laser screed technology for perfectly flat, level concrete floors with tight tolerances.',
    areas: 'Superflat Floors · Cold Storage · Auto',
  },
  {
    id: 'waterproof', icon: '💧', slug: 'waterproofing',
    title: 'Waterproofing',
    desc: 'Terrace, basement and structural waterproofing solutions. Crystalline, membrane and liquid applied systems.',
    areas: 'Terraces · Basements · Structures',
  },
  {
    id: 'groove', icon: grooveImage, slug: 'groove-cutting',
    title: 'Groove Cutting',
    desc: 'Diamond blade saw cutting for expansion joints and crack control in concrete floors and pavements.',
    areas: 'Joint Cutting · Expansion Joints',
  },
]

// ── Projects ──────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  { id:1, type:'VDF Flooring',    badge:'VDF',       title:'Warehouse Flooring',   location:'Medchal, Hyderabad',    area:'25,000 sqft', color:'#1e3a5f' },
  { id:2, type:'Tremix Flooring', badge:'TREMIX',    title:'Factory Floor',         location:'Patancheru, Hyderabad', area:'18,500 sqft', color:'#3a1e1e' },
  { id:3, type:'RCC Road',        badge:'RCC ROAD',  title:'Township Road',         location:'Shadnagar, Telangana',  area:'1.2 km',      color:'#1e3a2a' },
  { id:4, type:'Laser Screed',    badge:'LASER',     title:'Superflat Floor',       location:'Shamshabad, Hyderabad', area:'32,000 sqft', color:'#2a1e3a' },
  { id:5, type:'VDF Flooring',    badge:'VDF',       title:'Industrial Flooring',   location:'Sangareddy, Telangana', area:'15,000 sqft', color:'#1e2a3a' },
  { id:6, type:'Waterproofing',   badge:'WATERPROOF',title:'Terrace Waterproofing', location:'Kukatpally, Hyderabad', area:'8,000 sqft',  color:'#1a2a1a' },
]

// ── Industries ────────────────────────────────────────────────
export const INDUSTRIES = [
  '🏭 Manufacturing',
  '📦 Logistics & Warehousing',
  '🏗️ Real Estate & Layouts',
  '❄️ Cold Storage',
  '🚗 Automobile Showrooms',
  '🔬 Pharma & Cleanrooms',
  '🏢 Commercial Complexes',
  '🛒 Retail & Malls',
  '🏛️ Government Projects',
  '✈️ Airport & Infrastructure',
  '🏠 Residential Townships',
  '🌾 Food Processing Units',
]

// ── Testimonials ──────────────────────────────────────────────
export const TESTIMONIALS: Testimonial[] = [
  {
    id:1, initials:'RS', rating:5,
    name:'Rajesh Sharma',
    company:'Logistics Company, Medchal',
    text:'Very professional team. The VDF flooring quality at our warehouse is excellent. They completed the 20,000 sqft project in just 8 days — ahead of schedule!',
  },
  {
    id:2, initials:'MK', rating:5,
    name:'Mohammed Khan',
    company:'Manufacturing Unit, Patancheru',
    text:'We hired Instant VDF for our factory floor. Tremix work was top quality. No cracks, no dust — perfectly smooth. Highly recommended.',
  },
  {
    id:3, initials:'PV', rating:5,
    name:'Praveen Varma',
    company:'Real Estate Developer, Shadnagar',
    text:'Best RCC road contractor in Hyderabad. They did our 1.5 km layout road. The flatness and finishing is superb. Price was also reasonable.',
  },
]

// ── Blogs ─────────────────────────────────────────────────────
export const BLOGS: Blog[] = [
  {
    id:1, slug:'vdf-flooring-benefits',
    tag:'VDF Flooring',
    date:'15 Jan 2025',
    title:'5 Benefits of VDF Flooring for Industrial Warehouses',
    excerpt:'VDF (Vacuum Dewatered Flooring) offers superior durability, dust-free surfaces, and faster construction timelines compared to conventional flooring...',
  },
  {
    id:2, slug:'tremix-vs-vdf',
    tag:'Comparison',
    date:'10 Feb 2025',
    title:'Tremix vs VDF Flooring — Which is Right for Your Project?',
    excerpt:'Choosing between Tremix and VDF flooring depends on load capacity, budget, and project requirements. Here is a detailed comparison...',
  },
  {
    id:3, slug:'rcc-road-construction-guide',
    tag:'RCC Roads',
    date:'5 Mar 2025',
    title:'Complete Guide to RCC Road Construction in Hyderabad',
    excerpt:'Reinforced cement concrete roads are becoming the preferred choice for townships and industrial areas in Telangana due to their longevity...',
  },
]

// ── FAQs ──────────────────────────────────────────────────────
export const FAQS: FAQ[] = [
  {
    id:1,
    question:'What is VDF Flooring and where is it used?',
    answer:'VDF (Vacuum Dewatered Flooring) is a concrete flooring technique where excess water is removed from the concrete using vacuum dewatering equipment, resulting in a stronger, harder, and dust-free floor surface. It is widely used in warehouses, factories, logistics parks, and industrial spaces.',
  },
  {
    id:2,
    question:'What is the difference between VDF and Tremix flooring?',
    answer:'VDF uses vacuum dewatering to reduce the water-cement ratio, while Tremix uses vibration and compaction. Both produce high-quality floors, but VDF typically gives a smoother finish while Tremix is preferred for very heavy loads. We recommend VDF for logistics and Tremix for heavy manufacturing.',
  },
  {
    id:3,
    question:'How long does a VDF flooring project take?',
    answer:'A typical 10,000 sqft VDF flooring project takes 3–5 days depending on the site conditions, concrete mix design, and curing requirements. Our team uses modern machinery to ensure fast and quality delivery.',
  },
  {
    id:4,
    question:'Do you provide services outside Hyderabad?',
    answer:'Yes, we provide services across all of Telangana, Andhra Pradesh, and nearby states. We have completed projects in Medchal, Patancheru, Shadnagar, Sangareddy, Nalgonda, Warangal, and other districts.',
  },
  {
    id:5,
    question:'How do I get a quote for my project?',
    answer:'You can request a free quote by filling the contact form on our website, calling us directly, or sending a WhatsApp message. We typically respond within 2 hours with a detailed estimate.',
  },
  {
    id:6,
    question:'What is the minimum project area you take?',
    answer:'We generally take projects from 2,000 sqft and above for flooring work, and 500 meters and above for road construction. Contact us to discuss your specific requirements.',
  },
]

// ── Why Choose Us points ──────────────────────────────────────
export const WHY_POINTS = [
  {
    icon: '👷',
    title: 'Expert Team',
    desc: 'Highly skilled professionals with extensive industry experience across 500+ projects.',
  },
  {
    icon: '🏆',
    title: 'Quality Assurance',
    desc: 'Premium materials and rigorous quality control processes on every project.',
  },
  {
    icon: '✅',
    title: 'Proven Track Record',
    desc: '500+ successful projects delivered on time and within budget across Telangana.',
  },
  {
    icon: '💰',
    title: 'Transparent Pricing',
    desc: 'Clear quotes with no hidden charges. Every line item explained before work begins.',
  },
]

// ── About checkpoints ─────────────────────────────────────────
export const ABOUT_POINTS = [
  'Experienced Team of Professionals',
  'High-Quality Materials',
  'Timely Project Completion',
  'Competitive Pricing',
  'Post-Installation Support',
  '100% Client Satisfaction',
]