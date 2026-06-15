import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

import App from './App'
import { Home, LogIn, SignUp, Dashboard } from './components'
import Layout from './hoc/Layout.jsx'

import NotFound from './components/NotFound' 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="home" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="login" element={<LogIn />} />
      <Route path="*" element={<NotFound />} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)