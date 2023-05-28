import { useContext, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Sun from '../Icons/Sun'
import './navbar.css'
import Moon from '../Icons/Moon'
import { SettingsContext } from '../../context/SettingsContext'
import VolumeMuted from '../Icons/VolumeMuted'
import VolumeHigh from '../Icons/VolumeHigh'

const ITEMS_NAV = ['chronometer', 'timer', 'countdown']
const Navbar = ({ handleOptionSelected }) => {
  const [activeTab, setActiveTab] = useState(null)
  const { isDark, changeIsDark, isMuted, changeIsMuted } = useContext(SettingsContext)

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
      <div>
        <ul className='settings'>
          <li>
            <button className='btn-dark-mode' onClick={() => changeIsDark()}>
              {
                isDark
                  ? <Sun />
                  : <Moon />
              }
            </button>
          </li>
          <li>
            <button className='btn-dark-mode' onClick={changeIsMuted}>
              {
                isMuted
                  ? <VolumeMuted />
                  : <VolumeHigh />
              }
            </button>
          </li>
        </ul>
        <ul className='options'>
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
      </div>

    </nav>
  )
}
export default Navbar
