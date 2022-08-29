import banner from '../../assets/IMG.png'
import './home.css'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <div className="main">
        <div className="Banner">
          <div className="Banner-container">
            <img src={banner} className="Banner-img" alt="Banner" />
            <div className="Ombrage"></div>
            <h2 className="Banner-title">Chez vous, partout et ailleurs</h2>
          </div>
        </div>
        <div className="Home-main text-center">
          <Card />
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Home
