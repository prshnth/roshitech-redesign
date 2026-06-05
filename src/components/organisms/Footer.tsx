import { Container, Logo } from '@/components/atoms'
import { footerColumns } from '@/data/site'

/** Site footer with brand, sitemap columns, and copyright. */
export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-night-2">
      <Container className="grid gap-10 py-16 md:grid-cols-[1.3fr_2fr]">
        <div>
          <Logo onDark />
          <p className="mt-3 max-w-xs text-[14px] leading-relaxed text-on-night-muted">
            High-level software solutions and training services since 1996.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-8 sm:grid-cols-3" aria-label="Footer">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-[13px] font-semibold uppercase tracking-[0.12em] text-on-night">
                {column.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener' : undefined}
                      className="text-[14px] text-on-night-muted transition-colors hover:text-on-night"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-2 py-6 text-[13px] text-on-night-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Roshi Tech, Inc. All rights reserved.</p>
          <p>Merrimack, New Hampshire, USA</p>
        </Container>
      </div>
    </footer>
  )
}
