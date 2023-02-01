import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

import './index.css'
import Timer from './pages/Timer'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Navigate to='/casa'/>,
    children: [
      {
        path: '/timer',
        element: <Timer />
      },
      {
        path: '/chronometer/',
        element: <h1>casita</h1>
      },
      {
        path: '/countdown',
        element: <h1>CountDown</h1>
      },
      {
        path: '/timero',
        element: <h1>Timer</h1>
      }
    ]
  },
  {
    path: '/casa',
    element: <h1>hola mundo</h1>
  },
  {
    path: '/*',
    element: <h1>esta es la ruta default</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
