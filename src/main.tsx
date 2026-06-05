import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SiteLayout } from '@/components/templates/SiteLayout'
import { HomePage } from '@/components/pages/HomePage'
import './styles.css'

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element #root not found')

createRoot(rootElement).render(
  <StrictMode>
    <SiteLayout>
      <HomePage />
    </SiteLayout>
  </StrictMode>,
)
