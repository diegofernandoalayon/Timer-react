import Navbar from '../Navbar'
import Menu from '../Icons/Menu'
import CloseMenu from '../Icons/CloseMenu'
import './header.css'
import { useState } from 'react'
const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  const handleOptionSelected = () => {
    setIsMobile(false)
  }
  return (
    <header className='header'>
      <div className='header-buttons' >
        {
          isMobile
            ? <button
                onClick={() => setIsMobile(!isMobile)}
                style={{ color: 'inherit' }}
              >
                <CloseMenu width={50} height={50} />
              </button>
            : <button
                onClick={() => setIsMobile(!isMobile)}
                style={{ color: 'inherit' }}
              >
                <Menu width={50} height={50} />
              </button>
        }
      </div>
      <div className={` header-navbar ${isMobile ? 'header-mobile' : ''}`}>
        <Navbar handleOptionSelected={handleOptionSelected} />
      </div>

    </header>
  )
}
export default Header
