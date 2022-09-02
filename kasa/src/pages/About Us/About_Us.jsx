import Banner from '../../components/Banner/Banner'
import './about_us.css'
import Collapse from '../../components/Collapse/Collapse'

function AboutUs() {
  const valueFiabilite =
    'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'

  const valueRespect =
    'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'

  const valueService =
    "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."

  const valueResponsabilite =
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."

  return (
    <div className="main">
      <Banner />
      <Collapse
        rotate="Fiabilite"
        title={<h2 className="title">Fiabilité</h2>}
        content={valueFiabilite}
      />
      <Collapse
        rotate="Respect"
        title={<h2 className="title">Respect</h2>}
        content={valueRespect}
      />
      <Collapse
        rotate="Service"
        title={<h2 className="title">Service</h2>}
        content={valueService}
      />
      <Collapse
        rotate="Responsabilite"
        title={<h2 className="title">Responsabilité</h2>}
        content={valueResponsabilite}
      />
    </div>
  )
}

export default AboutUs
