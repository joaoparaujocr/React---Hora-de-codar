import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import './style.css';

export default function Footer() {
  return (
    <footer>
      <h3>Costs ©</h3>

      <div className="social_icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
    </footer>
  )
}