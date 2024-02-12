import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.component'

createRoot(document.getElementById('next-link-widget')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
