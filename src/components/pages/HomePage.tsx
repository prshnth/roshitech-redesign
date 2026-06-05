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
} from '@/components/organisms'

/** The single-page marketing site, composed top to bottom. */
export function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <About />
      <Services />
      <Models />
      <Testimonial />
      <Clients />
      <Leadership />
      <Careers />
      <Contact />
    </>
  )
}
