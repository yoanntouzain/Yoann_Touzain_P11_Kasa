import Banner from '../../components/Banner/Banner'
import './about_us.css'
import Collapse from '../../components/Collapse/Collapse'

function AboutUs() {
  return (
    <div className="main">
      <Banner />
      <Collapse oui="Fiabilite" title={<h2 className="title">Fiabilité</h2>} />
      <Collapse oui="Respect" title={<h2 className="title">Respect</h2>} />
      <Collapse oui="Service" title={<h2 className="title">Service</h2>} />
      <Collapse
        oui="Responsabilite"
        title={<h2 className="title">Responsabilité</h2>}
      />
    </div>
  )
}

export default AboutUs
