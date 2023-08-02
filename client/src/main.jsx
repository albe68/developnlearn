import React from 'react'
import ReactDOM from 'react-dom/client'
import {Student,Instructor} from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import {store} from './redux/store.js'
import AppRouter from './routes.jsx'
import { ThemeProvider } from "@material-tailwind/react";
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
    <RouterProvider router={AppRouter}/>
    <ToastContainer/>
    </ThemeProvider>
  
    </Provider>
  </React.StrictMode>,
)
