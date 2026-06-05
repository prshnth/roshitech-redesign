import { Suspense, lazy } from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import { SiteLayout } from '@/components/templates/SiteLayout'

const RouterDevtools = import.meta.env.PROD
  ? () => null
  : lazy(() =>
      import('@tanstack/react-router-devtools').then((m) => ({
        default: m.TanStackRouterDevtools,
      })),
    )

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <SiteLayout>
      <Outlet />
      <Suspense>
        <RouterDevtools />
      </Suspense>
    </SiteLayout>
  )
}
