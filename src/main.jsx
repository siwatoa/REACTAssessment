import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: '/', element: <Home/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
