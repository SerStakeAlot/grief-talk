import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import '@github/spark/spark'
import { BrowserRouter } from 'react-router-dom'

import App from './App.tsx'
import { ErrorFallback } from './ErrorFallback.tsx'

import './main.css'
import './styles/theme.css'
import './index.css'

// Restore original path after GitHub Pages SPA redirect (from 404.html)
try {
  const params = new URLSearchParams(window.location.search)
  const p = params.get('p')
  if (p) {
    const q = params.get('q')
    const h = params.get('h')
    const newPath = decodeURIComponent(p)
      + (q ? '?' + decodeURIComponent(q) : '')
      + (h ? '#' + decodeURIComponent(h) : '')
    window.history.replaceState(null, '', newPath)
  }
} catch (_) {
  // noop
}

const basename = import.meta.env.BASE_URL ?? '/'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </ErrorBoundary>
)
