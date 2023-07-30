import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StudentLoginPage from '../src/components/pages/student/StudentLoginPage';
import { Outlet } from 'react-router-dom';
export const  Student=()=> {
  const [count, setCount] = useState(0)

  return (
    <>   
     <h1 className="text-3xl font-bold text-red-500 underline text-center">Student</h1> 
    <Outlet/>
    </>

  )
}

export const Instructor=()=>{
  return(
    <>
     <h1 className="text-3xl font-bold text-red-500 underline text-center">Instrcutor</h1> 

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


