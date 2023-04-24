import {lazy, Suspense} from 'react'

const AppRoutes = lazy(() => import('./views/shared/routes/AppRoutes'))

export default function App() {

  return (
    <>
      <AppRoutes />
    </>
  )
}
