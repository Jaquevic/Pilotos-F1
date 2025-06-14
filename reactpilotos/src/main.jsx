import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import DetalhesPiloto from './DetalhesPiloto.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/piloto/:id" element={<DetalhesPiloto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
