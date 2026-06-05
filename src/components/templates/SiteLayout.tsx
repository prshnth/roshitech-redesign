import type { ReactNode } from 'react'
import { Footer, Navbar } from '@/components/organisms'

/** Page shell: fixed navigation, routed content, and footer. */
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}
