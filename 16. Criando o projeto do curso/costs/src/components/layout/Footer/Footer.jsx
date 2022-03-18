import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="social_icons">
        <FaFacebook />
        <FaTwitter />
        <FaInstagram />
      </div>
      <h3><span>Costs</span> ©</h3>
    </footer>
  )
}