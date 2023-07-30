import React from 'react'
import ReactDOM from 'react-dom/client'
import {Student,Instructor} from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import {store} from './redux/store.js'
import AppRouter from './routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={AppRouter}>
   
    </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
