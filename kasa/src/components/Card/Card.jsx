import './card.css'
import React from 'react'

function Card({ location }) {
  return (
    <>
      <div className="card">
        <div className="a">
          <p className="card-title">{location.title}</p>
        </div>
        <div className="b">
          <img className="card-img" src={location.pictures[0]} alt="image" />
        </div>
      </div>
    </>
  )
}

export default Card
