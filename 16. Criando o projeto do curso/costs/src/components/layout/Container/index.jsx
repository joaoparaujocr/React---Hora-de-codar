import './style.css'

export default function Container(props) {
  return <main className={`container ${props.customClass}`}>{props.children}</main>
}