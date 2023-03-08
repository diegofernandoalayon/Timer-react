import { useRef } from 'react'
import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header'
import FullScreenButton from './components/FullScreenButton'

function App () {
  const reference = useRef(null)

  return (
    <article className="App">
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
