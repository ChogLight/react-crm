import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Router, RouterProvider} from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element:<h1>Start</h1>
  },
  {
    path: '/about',
    element: <h1>About us</h1>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
)
