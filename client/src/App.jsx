import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StudentLoginPage from '../src/components/pages/student/StudentLoginPage';
import { Outlet } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css"
export const  Student=()=> {
  const [count, setCount] = useState(0)

  return (
    <>   
    <Outlet/>
    </>

  )
}

export const Instructor=()=>{
  return(
    <>

    <Outlet/>
    
    </>
  )

  
}

export const Admin=()=>{
  return (
    <>
    <Outlet/>
    </>
  )
}


