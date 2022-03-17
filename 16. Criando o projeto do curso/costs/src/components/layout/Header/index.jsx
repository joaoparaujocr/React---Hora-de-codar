import { Link } from 'react-router-dom';
import logo from '../../../img/costs_logo.png';
import './index.css';

export default function Navbar() {
  return (
    <header>
      <div><img src={logo} alt="" /></div>

      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projetos</Link></li>
          <li><Link to="/newproject">Novo projeto</Link></li>
          <li><Link to="/company">Empresa</Link></li>
          <li><Link to="/contact">Contato</Link></li>
        </ul>
      </nav>
    </header>
  )
}