import { Link } from 'react-router-dom'
import './LinkButton.css'

export default function LinkButton({ to, text }) {
  return (
    <Link className="btn" to={to}>
      {text}
    </Link>
  )
}