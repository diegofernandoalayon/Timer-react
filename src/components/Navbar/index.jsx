import { Link } from 'react-router-dom'
import './navbar.css'
const ITEMS_NAV = ['chronometer', 'timer', 'countdown']
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        {
          ITEMS_NAV.map(item => (
          <li key={item}>
            <Link to={item}>{item}</Link>
          </li>
          ))
        }
      </ul>
    </nav>
  )
}
export default Navbar
