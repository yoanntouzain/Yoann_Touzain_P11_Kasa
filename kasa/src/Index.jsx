// React
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// Style
import './index.css'

// Fichier
import Home from './pages/Home/Home'
import Header from './components/Header/Header'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Home />
    </Router>
  </React.StrictMode>
)
