import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, BrowserRouter, Routes } from 'react-router'
import App from './App.jsx'
import RootLayout from './layout/RootLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} >
        <Route index element={<App />} />
      </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
