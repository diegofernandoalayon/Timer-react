import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './navbar.css'

const ITEMS_NAV = ['chronometer', 'timer', 'countdown']
const Navbar = ({ handleOptionSelected }) => {
  const [activeTab, setActiveTab] = useState(null)
  const { pathname } = useLocation()
  const path = pathname.slice(1)

  useEffect(() => {
    setActiveTab(path)
  }, [])
  const handle = (item) => {
    setActiveTab(item)
    handleOptionSelected()
  }

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
