import './home.css'
import Card from '../../components/Card/Card'

import Banner from '../../components/Banner/Banner'
import { useState, useEffect } from 'react'

function Home() {
  const [location, setLocation] = useState([])

  useEffect(() => {
    async function getDatas() {
      let result = await fetch('./logement.json')
      let data = await result.json()
      setLocation(data)
    }
    getDatas()
  }, [])

  return (
    <div className="main">
      <Banner
        element={
          <h2 className="Banner-title">Chez vous, partout et ailleurs</h2>
        }
      />
      <div className="Home-main">
        <div className="container-card">
          {location.map((loc) => (
            <Card key={loc.id} location={loc} />
          ))}
        </div>
      </div>
    </div>
  )
}
export default Home
