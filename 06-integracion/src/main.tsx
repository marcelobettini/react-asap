import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router.tsx'
import { ThemeProvider } from './context/ThemeContext.tsx'
import { UserProvider } from './context/UserContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </UserProvider>
  </StrictMode>,
)
