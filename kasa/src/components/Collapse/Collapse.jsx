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

function openCollapse(e) {
  const collapse = e.target.children[1]
  const collapseContent = e.target.nextElementSibling
  const collapseHeader = e.target

  if (collapse.classList.contains('collapse-noRotate')) {
    collapse.classList.remove('collapse-noRotate')
    collapse.classList.add('collapse-rotate')
    collapseContent.classList.add('d-none')
    collapseContent.classList.remove('d-flex')
    collapseHeader.classList.remove('collapse-noMargin')
    collapseHeader.classList.add('collapse-margin')
  } else {
    collapse.classList.add('collapse-noRotate')
    collapse.classList.remove('collapse-rotate')
    collapseContent.classList.remove('d-none')
    collapseContent.classList.add('d-flex')
    collapseHeader.classList.add('collapse-noMargin')
    collapseHeader.classList.remove('collapse-margin')
  }
}

export default function Collapse(props) {
  return (
    <div className="collapse-container">
      <div
        className="collapse-header collapse-margin"
        type="button"
        onClick={openCollapse}
      >
        {props.title}
        <Vector rotate={props.rotate} />
      </div>
      <div className="collapse-content d-none">{props.content}</div>
    </div>
  )
}
