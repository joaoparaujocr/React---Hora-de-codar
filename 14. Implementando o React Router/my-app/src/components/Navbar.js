import { Link } from 'react-router-dom'
import './Navbar.css';

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link className="link_nav" to="/">Home</Link>
      </li>
      <li>
        <Link className="link_nav" to="/empresa">Empresa</Link>
      </li>
      <li>
        <Link className="link_nav" to="/contato">Contato</Link>
      </li>
    </ul>
  )
}