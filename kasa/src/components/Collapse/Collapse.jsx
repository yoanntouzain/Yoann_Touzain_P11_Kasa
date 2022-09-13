import { useState } from 'react'
import './collapse.css'

const Vector = (props) => (
  <svg
    className={'vector collapse-rotate ' + props.rotate}
    width="25"
    height="15"
    viewBox="0 0 25 15"
    xmlns="http://www.w3.org/2000/svg"
    fill="transparent"
  >
    <path d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z" />
  </svg>
)

function Collapse(props) {
  const [open, setOpen] = useState(false)
  return (
    <div
      className={`collapse-container ${props.classNameContainer} ${
        open ? 'open' : ''
      }`}
    >
      <div
        className="collapse-header collapse-margin"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {props.title}
        <Vector rotate={props.rotate} />
      </div>
      <div className={`collapse-content d-none ${props.classNameCustoms}`}>
        {props.content}
      </div>
    </div>
  )
}

export default Collapse
