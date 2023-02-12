// import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header'

function App () {
  // const navigate = useNavigate()
  // useEffect(() => {

  //   navigate('/casa')
  // },[])
  return (
    <article className="App">
      <Header />
      <Outlet />
    </article>
  )
}

export default App
