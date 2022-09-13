import React from 'react'
// import { useParams } from 'react-router-dom'
import banner from '../../assets/Banniere.png'
import Collapse from '../../components/Collapse/Collapse'
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
  //   const params = useParams()
  //   console.log(params)

  const valueDescription =
    "Vous serez à 50m du canal Saint-martin où vous pourrez pique-niquer l'été et à côté de nombreux bars et restaurants. Au cœur de Paris avec 5 lignes de métro et de nombreux bus. Logement parfait pour les voyageurs en solo et les voyageurs d'affaires. Vous êtes à1 station de la gare de l'est (7 minutes à pied). "

  const valueEquipement = `
    Climatisation
    Wi-Fi
    Cuisine
    Espace de travail
    Fer à repasser
    Sèche-cheveux
    Cintres`

  return (
    <div className="container">
      <div className="slide-container">
        <img src={banner} className="slideShow" alt="Slide Show" />
      </div>

      <div className="main-accommodation">
        <div className="header-accommodation">
          {/* title */}
          <div className="title-accommodation">
            <div className="location-accommodation">
              <div className="logement-accommodation">
                <h1>Cozy loft on the Canal Saint-Martin</h1>
              </div>
              <div className="city-accommodation">
                <h2>Paris, Île-de-France</h2>
              </div>
            </div>

            <div className="tags-accommodation">
              <div className="tag-accommodation">
                <p>Cozy</p>
              </div>
              <div className="tag-accommodation">
                <p>Canal</p>
              </div>
              <div className="tag-accommodation">
                <p>Paris 10</p>
              </div>
            </div>
          </div>

          <div className="fiche-accommodation">
            <div className="identity-accommodation">
              <div className="proprio-accommodation">Alexandre Dumas</div>
              <div className="photo-accommodation"></div>
            </div>

            <div className="ratings-accommodation">
              <div className="rating-accommodation">
                <Star fill="#FF6060" />
                <Star fill="#FF6060" />
                <Star fill="#FF6060" />
                <Star fill="#E3E3E3" />
                <Star fill="#E3E3E3" />
              </div>
            </div>
          </div>
        </div>

        <div className="body-accommodation">
          <div className="description-accommodation">
            <Collapse
              classNameContainer="collapse-container-accommodation"
              classNameCustoms="collapse-content-accommodation"
              rotate="Description"
              title={
                <h2 className="title-collapse-accommodation">Description</h2>
              }
              content={<p>{valueDescription}</p>}
            />
          </div>
          <div className="equipment-accommodation">
            <Collapse
              classNameContainer="collapse-container-accommodation"
              classNameCustoms="collapse-content-accommodation"
              rotate="Équipements"
              title={
                <h2 className="title-collapse-accommodation">Équipements</h2>
              }
              content={<p>{valueEquipement}</p>}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Accommodation
