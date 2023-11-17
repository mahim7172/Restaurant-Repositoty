import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Auth/AuthProvider.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <div className='container mx-auto'>
          <RouterProvider router={router}>
          </RouterProvider>
        </div>
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)
