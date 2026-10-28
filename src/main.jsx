import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// This only prints when the whole app loads from scratch. Keep an eye on it in Part 3.
console.log('main.jsx ran: the whole app just loaded from scratch')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
