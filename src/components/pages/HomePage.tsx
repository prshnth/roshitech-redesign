import {
  About,
  Careers,
  Clients,
  Contact,
  Hero,
  Leadership,
  Models,
  Services,
  StatsBand,
  Testimonial,
  CompanyCarousel,
} from '@/components/organisms'

/** The single-page marketing site, composed top to bottom. */
export function HomePage() {
  return (
    <>
      <Hero />
      <CompanyCarousel />
      <StatsBand />
      <About />
      <Leadership />
      <Services />
      <Models />
      <Testimonial />
      <Clients />
      <Careers />
      <Contact />
    </>
  )
}
