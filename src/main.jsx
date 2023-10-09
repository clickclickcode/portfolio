import React from 'react'
import ReactDOM from 'react-dom/client'
import AltApp from './AltApp.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AltApp />
    </BrowserRouter>
  </React.StrictMode>,
)
