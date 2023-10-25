import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Register, Profile} from './pages'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Register />
    },
    {
      path: '/profile',
      element: <Profile />
    },
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
