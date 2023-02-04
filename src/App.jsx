// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import './App.css'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

function App () {
  // const navigate = useNavigate()
  // useEffect(() => {

  //   navigate('/casa')
  // },[])
  return (
    <article className="App">
      <Navbar />
      <Outlet />
    </article>
  )
}

export default App
