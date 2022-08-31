import './home.css'
import Card from '../../components/Card/Card'

import Banner from '../../components/Banner/Banner'

function Home() {
  return (
    <div className="main">
      <Banner
        element={
          <h2 className="Banner-title">Chez vous, partout et ailleurs</h2>
        }
      />
      <div className="Home-main">
        <Card />
      </div>
    </div>
  )
}
export default Home
