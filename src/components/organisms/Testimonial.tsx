import { Container, Reveal, Section } from '@/components/atoms'
import { featuredTestimonial } from '@/data/testimonial'

/** Single featured client testimonial, set in serif. */
export function Testimonial() {
  return (
    <Section className="bg-paper">
      <Container>
        <Reveal>
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="font-serif text-[clamp(1.5rem,3.6vw,2.4rem)] font-light italic leading-[1.3] text-ink">
              “{featuredTestimonial.quote}”
            </blockquote>
            <figcaption className="mt-6 text-[15px] text-muted">
              — {featuredTestimonial.cite}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </Section>
  )
}
