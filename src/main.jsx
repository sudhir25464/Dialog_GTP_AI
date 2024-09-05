import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ContextProvider from './context/Contextconfig.jsx'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </ContextProvider>,
)
