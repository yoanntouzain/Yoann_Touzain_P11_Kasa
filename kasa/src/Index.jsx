// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Style
import './index.css'

// Fichier
import Home from './pages/Home/Home'
import Header from './components/Header/Header'
import About from './pages/About Us/About_Us'
import Footer from './components/Footer/Footer'
import Error from './pages/Error/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/A_Propos" element={<About />} />
      <Route path="/error" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
)
