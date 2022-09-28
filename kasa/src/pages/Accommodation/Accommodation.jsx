import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Collapse from '../../components/Collapse/Collapse'
import SlideShow from '../../components/SlideShow/SlideShow'
import './accommodation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Accommodation() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [location, setLocation] = useState({
    tags: [],
    pictures: [],
    host: {},
    equipments: [],
  })

  const [rating, setRating] = useState([])
  useEffect(() => {
    async function getDatas() {
      let result = await fetch('/logement.json')
      let data = await result.json()
      let searchLocation = data.find((element) => element.id === id)
      if (searchLocation !== undefined) {
        setLocation(searchLocation)
        let array = []
        for (let index = 1; index <= 5; index++) {
          if (index <= searchLocation.rating) {
            array.push(true)
          } else array.push(false)
        }
        setRating(array)
      } else {
        navigate('/error')
      }
    }
    getDatas()
  }, [id, navigate])

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

            <div className="ratings-accommodation">
              {Object.entries(rating).map(([index, star]) => (
                <FontAwesomeIcon
                  key={'star' + index}
                  icon={faStar}
                  className={star ? 'full' : ''}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="body-accommodation">
          <div className="description-accommodation">
            <Collapse
              key="description"
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
              key="équipement"
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
