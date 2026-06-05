import { useState } from 'react'
import { Button, Container, Logo } from '@/components/atoms'
import { navLinks } from '@/data/site'
import { useScrolled } from '@/hooks/useScrolled'
import { cn } from '@/lib/cn'

/** Sticky top navigation that gains a translucent backdrop once scrolled. */
export function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-colors duration-300',
        scrolled || open
          ? 'border-b border-line-soft bg-paper-3/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <Container className="flex h-[52px] items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Roshi Tech — home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[14px] font-medium text-ink-2 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="relative h-10 w-10 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={cn(
              'absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 bg-ink transition-transform duration-300',
              open ? 'rotate-45' : '-translate-y-1.5',
            )}
          />
          <span
            className={cn(
              'absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 bg-ink transition-opacity duration-300',
              open && 'opacity-0',
            )}
          />
          <span
            className={cn(
              'absolute left-1/2 top-1/2 h-[1.5px] w-5 -translate-x-1/2 bg-ink transition-transform duration-300',
              open ? '-rotate-45' : 'translate-y-1.5',
            )}
          />
        </button>
      </Container>

      <div
        className={cn(
          'overflow-hidden bg-paper-3/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden',
          open ? 'max-h-[480px] border-t border-line-soft' : 'max-h-0',
        )}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-2.5 text-[15px] font-medium text-ink-2 transition-colors hover:bg-paper-2 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <Button href="#contact" block className="mt-2" onClick={() => setOpen(false)}>
            Request information
          </Button>
        </Container>
      </div>
    </header>
  )
}
