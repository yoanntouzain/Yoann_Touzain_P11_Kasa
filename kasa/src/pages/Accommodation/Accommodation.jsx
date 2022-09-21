import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import SlideShow from '../../components/SlideShow/SlideShow'
import './accommodation.css'

const Star = (props) => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 30 30"
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.645 12L15 0L11.355 12H0L9.27 18.615L5.745 30L15 22.965L24.27 30L20.745 18.615L30 12H18.645Z" />
  </svg>
)

function Accommodation() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [location, setLocation] = useState({
    tags: [],
    pictures: [],
    host: {},
    equipments: [],
  })

  useEffect(() => {
    async function getDatas() {
      let result = await fetch('/logement.json')
      let data = await result.json()
      let searchLocation = data.find((element) => element.id === id)
      if (searchLocation !== undefined) {
        setLocation(searchLocation)
      } else {
        navigate('/error')
      }
    }
    getDatas()
  }, [id, navigate])

  function StarDisplay() {
    switch (location.rating) {
      case '1':
        return (
          <div className="rating-accommodation">
            <Star fill="#FF6060" />
            <Star fill="#E3E3E3" />
            <Star fill="#E3E3E3" />
            <Star fill="#E3E3E3" />
            <Star fill="#E3E3E3" />
          </div>
        )

      case '2':
        return (
          <div className="rating-accommodation">
            <Star fill="#FF6060" />
            <Star fill="#FF6060" />
            <Star fill="#E3E3E3" />
            <Star fill="#E3E3E3" />
            <Star fill="#E3E3E3" />
          </div>
        )
      case '3':
        return (
          <div className="rating-accommodation">
            <Star fill="#FF6060" />
            <Star fill="#FF6060" />
            <Star fill="#FF6060" />
            <Star fill="#E3E3E3" />
            <Star fill="#E3E3E3" />
          </div>
        )
      case '4':
        return (
          <div className="rating-accommodation">
            <Star fill="#FF6060" />
            <Star fill="#FF6060" />
            <Star fill="#FF6060" />
            <Star fill="#FF6060" />
            <Star fill="#E3E3E3" />
          </div>
        )
      case '5':
        return (
          <div className="rating-accommodation">
            <Star fill="#FF6060" />
            <Star fill="#FF6060" />
            <Star fill="#FF6060" />
            <Star fill="#FF6060" />
            <Star fill="#FF6060" />
          </div>
        )
      default:
        return (
          <div className="rating-accommodation">
            <p>No ratings</p>
          </div>
        )
    }
  }

  return (
    <div className="container">
      <div className="slide-container">
        <SlideShow pictures={location.pictures} />
      </div>

      <div className="main-accommodation">
        <div className="header-accommodation">
          {/* title */}
          <div className="title-accommodation">
            <div className="location-accommodation">
              <div className="logement-accommodation">
                <h1>{location.title}</h1>
              </div>
              <div className="city-accommodation">
                <h2>{location.location}</h2>
              </div>
            </div>

            <div className="tags-accommodation">
              {location.tags.map((element) => (
                <div className="tag-accommodation">
                  <p key={element}>{element}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="fiche-accommodation">
            <div className="identity-accommodation">
              <div className="proprio-accommodation">{location.host.name}</div>
              <div className="photo-accommodation">
                <img src={location.host.picture} alt="propriétaire" />
              </div>
            </div>

            <div className="ratings-accommodation">{StarDisplay()}</div>
          </div>
        </div>

        <div className="body-accommodation">
          <div className="description-accommodation">
            <Collapse
              classNameContainer="collapse-container-accommodation"
              classNameHeader="collapse-header-accommodation"
              classNameCustoms="collapse-content-accommodation"
              rotate="Description"
              title={
                <h2 className="title-collapse-accommodation">Description</h2>
              }
              content={<p>{location.description}</p>}
            />
          </div>
          <div className="equipment-accommodation">
            <Collapse
              classNameContainer="collapse-container-accommodation"
              classNameHeader="collapse-header-accommodation"
              classNameCustoms="collapse-content-accommodation"
              rotate="Équipements"
              title={
                <h2 className="title-collapse-accommodation">Équipements</h2>
              }
              content={
                <ul>
                  {location.equipments.map((element) => (
                    <li key={element}>{element}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accommodation
