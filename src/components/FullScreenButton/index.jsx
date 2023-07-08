import { useState } from 'react'
import FullScreen from '../Icons/FullScreen'
import Minimise from '../Icons/Minimise'
import './fullscreenbutton.css'
const FullScreenButton = ({ element }) => {
  const [isFullScreen, setIsFullScreen] = useState(false)
  const handleScreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
      setIsFullScreen(false)
    } else {
      element.current.requestFullscreen()
      setIsFullScreen(true)
    }
  }
  return (
    <button
      className="btn-fullscreen"
      onClick={handleScreen}
      // style={{ color: 'inherit' }}
    >
      {
        isFullScreen
          ? <Minimise height={46} width={46}/>
          : <FullScreen height={46} width={46}/>
      }
    </button>
  )
}
export default FullScreenButton
