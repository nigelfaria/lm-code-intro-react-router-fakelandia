import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/Utility/error-fallback'
import Router from './components/router/router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  )
}

export default App
