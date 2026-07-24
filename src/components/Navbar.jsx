import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
      <span>Jaskaran.me</span>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar
