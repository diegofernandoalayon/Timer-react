import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import './index.css'
import Timer from './pages/Timer'
// import TimeForm from './components/TimeForm'
import Chronometer from './pages/Chronometer'
// import TimeInput from './components/TimeInput'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Navigate to='/chronometer'/>,
    children: [
      {
        path: '/',
        element: <Chronometer />
      },
      {
        path: 'timer',
        element: <Timer />
      },
      {
        path: 'chronometer',
        element: <Chronometer />
      },
      {
        path: 'countdown',
        element: <h1>CountDown</h1>
      },
      {
        path: '/timero',
        element: <h1>Timer</h1>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
