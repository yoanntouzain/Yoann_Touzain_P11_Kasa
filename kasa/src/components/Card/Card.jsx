import './card.css'
import React from 'react'
import { Link } from 'react-router-dom'

function Card({ location }) {
  return (
    <Link to={'Accommodation/' + location.id} className="link-card">
      <div className="card" id={location.id}>
        <div className="card-top">
          <p className="card-title">{location.title}</p>
        </div>
        <div className="card-bottom">
          <img className="card-img" src={location.cover} alt="logement" />
        </div>
      </div>
    </Link>
  )
}

export default Card
