import { Link } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import './Navbar.css';

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link className="link_nav" to="/"><FaHome />Home</Link>
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