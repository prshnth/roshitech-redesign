import { useState, type FormEvent } from 'react'
import { Button, Container, Eyebrow, Reveal, Section, SectionTitle } from '@/components/atoms'
import { ContactDetail, FormField } from '@/components/molecules'
import { contact, referralOptions, serviceOptions } from '@/data/site'

/** Dark contact section: company details + inquiry form. */
export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <Section id="contact" className="bg-night">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <Eyebrow light>Get in touch</Eyebrow>
            <SectionTitle light className="mt-3">
              Let’s talk about your next project.
            </SectionTitle>
            <p className="mt-5 text-[17px] leading-relaxed text-on-night-muted">
              Tell us about your requirements and we’ll suggest services tailored to your business.
            </p>

            <div className="mt-10 space-y-6">
              <ContactDetail label="Head Office">
                {contact.office.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </ContactDetail>
              <ContactDetail label="Phone">
                <a href={contact.phoneHref} className="transition-colors hover:text-accent-sky">
                  {contact.phone}
                </a>
              </ContactDetail>
              <ContactDetail label="Fax">{contact.fax}</ContactDetail>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField id="name" label="Name" required />
                <FormField id="email" label="Email" type="email" required />
              </div>
              <div className="mt-5">
                <FormField id="company" label="Company" />
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <FormField id="service" label="Service of interest" type="select" options={serviceOptions} />
                <FormField
                  id="referral"
                  label="How did you hear about us?"
                  type="select"
                  options={referralOptions}
                />
              </div>
              <div className="mt-5">
                <FormField
                  id="message"
                  label="Message"
                  type="textarea"
                  required
                  placeholder="Tell us about your project…"
                />
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit">Send message</Button>
                {sent && (
                  <p role="status" className="text-[14px] text-accent-sky">
                    Thanks — we’ll be in touch shortly.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
