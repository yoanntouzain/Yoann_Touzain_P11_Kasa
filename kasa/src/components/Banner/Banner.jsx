import banner from '../../assets/Banniere.png'
import './banner.css'

export default function Banner(props) {
  return (
    <div className="Banner">
      <div className="Banner-container">
        <img src={banner} className="Banner-img" alt="Banner" />
        {props.element}
      </div>
    </div>
  )
}
