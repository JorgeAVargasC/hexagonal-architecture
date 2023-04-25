import { lazy } from 'react'

const AppRoutes = lazy(() => import('@/routes/AppRoutes'))

export default function App() {
  return (
    <>
      <AppRoutes />
    </>
  )
}
