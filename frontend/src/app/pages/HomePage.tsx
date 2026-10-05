import SEO from '@/app/components/common/SEO'
import HeroSection         from '@/app/components/home/HeroSection'
import ClientsMarquee      from '@/app/components/home/ClientsMarquee'
import StatsSection        from '@/app/components/home/StatsSection'
import AboutPreview        from '@/app/components/home/AboutPreview'
import ServicesPreview     from '@/app/components/home/ServicesPreview'
import WhyUsSection        from '@/app/components/home/WhyUsSection'
import ProjectsPreview     from '@/app/components/home/ProjectsPreview'
import IndustriesSection   from '@/app/components/home/IndustriesSection'
import TestimonialsPreview from '@/app/components/home/TestimonialsPreview'
import FAQPreview          from '@/app/components/home/FAQPreview'
import CTASection          from '@/app/components/home/CTASection'

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Instant VDF Construction — Hyderabad's trusted VDF Flooring, Tremix Flooring & RCC Road experts. 800+ projects across Telangana."
        keywords="VDF flooring Hyderabad, Tremix flooring Telangana, industrial flooring contractors, RCC road Hyderabad"
      />
      <HeroSection />
      <StatsSection />
      <ClientsMarquee /> 
      <AboutPreview />
      <ServicesPreview />
      <WhyUsSection />
      <ProjectsPreview />
      <IndustriesSection />
      <TestimonialsPreview />
      <FAQPreview />
      <CTASection />
    </>
  )
}