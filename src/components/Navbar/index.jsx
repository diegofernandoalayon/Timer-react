import { Link } from 'react-router-dom'
import './navbar.css'
import { useState } from 'react'
// import { useRef } from 'react'
const ITEMS_NAV = ['chronometer', 'timer', 'countdown']
const Navbar = () => {
  const [activeTab, setActiveTab] = useState(null)
  const handle = (item) => {
    setActiveTab(item)
  }
  console.log('casas casac acsacasa')
  return (
    <nav className="nav-bar">
      <ul>
        {
          ITEMS_NAV.map(item => (
          <li key={item} onClick={() => handle(item)} className={`${activeTab === item ? 'active' : ''}`}>
            <Link
            to={item}
            >
              {item}
            </Link>
          </li>
          ))
        }
      </ul>
    </nav>
  )
}
export default Navbar
