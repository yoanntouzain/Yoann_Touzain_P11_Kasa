import React, { useEffect, useState } from 'react'
import './slideShow.css'

const Arrow = (props) => (
  <svg
    width="48"
    height="80"
    viewBox="0 0 48 80"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0.960022 72.3458L8.04002 79.4258L47.64 39.8258L8.04002 0.22583L0.960022 7.30583L33.48 39.8258L0.960022 72.3458Z" />
  </svg>
)

export default function SlideShow({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState('')
  useEffect(() => setCurrentPicture(pictures[0]), [pictures])
  const index = pictures.findIndex((element) => element === currentPicture)
  function nextSlide() {
    if (pictures.length - 1 === index) {
      setCurrentPicture(pictures[0])
    } else {
      setCurrentPicture(pictures[index + 1])
    }
  }

  function previousSlide() {
    if (index === 0) {
      setCurrentPicture(pictures[pictures.length - 1])
    } else {
      setCurrentPicture(pictures[index - 1])
    }
  }
  return (
    <>
      <div className="container-carousel">
        <div className="slider">
          <img src={currentPicture} className="active" alt="Bannière" />
        </div>

        <div className="btn-nav left">
          <Arrow onClick={previousSlide} />
        </div>

        <div className="btn-nav right">
          <Arrow onClick={nextSlide} />
        </div>

        <div className="indexSlide">
          <p>
            {[index + 1]}/{pictures.length}
          </p>
        </div>
      </div>
    </>
  )
}
