import { useState } from 'react'

import { AppRoutes } from './views/shared/routes/AppRoutes'

import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AppRoutes />
    </>
  )
}

export default App
