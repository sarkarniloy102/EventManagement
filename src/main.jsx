import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import Layout from './Layout/Layout';
import Home from '././Pages/Home/Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Gallery from './Pages/Gallery/Gallery';
import LogIn from './Pages/LogIn/LogIn'
import Register from './Pages/Register/Register'
import Services from './Components/Services/Services';
import PrivateRoutes from './Components/Provider/PrivateRoutes';
import EventDetails from './Components/EventDetails/EventDetails';
import AuthProvider from './Components/Provider/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch('public/Services.json')
      },
      {
        path: "/gallery",
        element:<Gallery></Gallery> ,
        
      },
      {
        path:"/login",
        element: <LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/services",
        element: <Services></Services> ,
        loader: () => fetch('public/Services.json')
      },
      {
        path:"/services/:id",
        element: <PrivateRoutes><EventDetails></EventDetails> </PrivateRoutes>,
        // loader: () => fetch('public/Services.json')
      },
      
      
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
   
  </React.StrictMode>,
)
