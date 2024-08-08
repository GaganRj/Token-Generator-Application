import { lazy, Suspense } from 'react'
import './App.css'

const TokenGenerator = lazy(() => import('./components/TokenGenerator'))

function App() {

  return (
    <Suspense fallback={<div>LOADING...</div>}>
      <TokenGenerator />
    </Suspense>
  )
}

export default App
