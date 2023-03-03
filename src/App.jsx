import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header'

function App () {
  return (
    <article className="App">
      <Header />
      <Outlet />
    </article>
  )
}

export default App
