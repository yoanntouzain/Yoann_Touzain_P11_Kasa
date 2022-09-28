// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Style
import './index.css'

// Fichier
import Home from './pages/Home/Home'
import Accommodation from './pages/Accommodation/Accommodation'
import Header from './components/Header/Header'
import About from './pages/About Us/About_Us'
import Footer from './components/Footer/Footer'
import Error from './pages/Error/Error'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="Accommodation/:id"
          element={<Accommodation key="accommodation" />}
        />
        <Route path="/A_Propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
