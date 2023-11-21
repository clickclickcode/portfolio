import React from 'react'
import ReactDOM from 'react-dom/client'
import AltApp from './AltApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// BrowserRouter er et lævn fra en iterering der ikke blev til noget
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AltApp />
    </BrowserRouter>
  </React.StrictMode>,
)
