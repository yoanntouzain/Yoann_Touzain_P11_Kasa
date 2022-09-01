import './collapse.css'

const Vector = (props) => (
  <svg
    className={'vector ' + props.oui}
    width="25"
    height="15"
    viewBox="0 0 25 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
      fill="white"
    />
  </svg>
)

function openCollapse(e) {
  const collapse = e.target.children[1]

  if (collapse.classList.contains('collapse')) {
    collapse.classList.remove('collapse')
    collapse.classList.add('collapse-rotate')
    console.log('fermer')
  } else {
    collapse.classList.add('collapse')
    collapse.classList.remove('collapse-rotate')
    console.log('ouvert')
  }
}

export default function Collapse(props) {
  return (
    <div>
      <div className="collapse-content" type="button" onClick={openCollapse}>
        {props.title}
        <Vector key={props.oui} oui={props.oui} />
      </div>
    </div>
  )
}
