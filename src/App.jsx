import { useContext, useRef } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header'
import FullScreenButton from './components/FullScreenButton'
import { SettingsContext } from './context/SettingsContext'

function App () {
  const reference = useRef(null)
  const { isDark } = useContext(SettingsContext)

  return (
    <article className={`App ${isDark ? '' : 'light-mode'}`}>
      <Header />
      <section ref={reference} className='container-screen'>
        <div className = 'container-btn-full'>
          <FullScreenButton element={reference}/>
        </div>
        <Outlet />
      </section>
    </article>
  )
}

export default App
