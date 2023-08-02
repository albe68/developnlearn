import React,{useEffect, useState} from 'react'
import { getAllStudents,blockStudent,unblockStudent } from '../../../api/endpoints/auth/studentManagement'
import AdminSideBar from '../../AdminSideBar';

 const ViewAllStudents =()=> {
    const [students,setStudents]=useState([]);

   const  fetchStudents=async()=>{
   try{ const response= await getAllStudents();
    setStudents(response?.data);}catch(err){console.log("error in fetch Studnts")}
   }
   
   useEffect(()=>{
    fetchStudents();    
   },[])

   const blockStudentAccount=async(studentId)=>{

    try{
    await blockStudent(studentId);
    }catch(err){
        console.log("ERROR while blocking",err)
    }
   }

   const unblockStudentAccount=async(studentId)=>{
    console.log("hi")

    useEffect(()=>{
        fetchStudents();    
       },[])

    try{
    await unblockStudent(studentId);   
    }catch(err){
        console.log("ERROR while blocking",err)
    }
   }


   return (
    <>
  

<AdminSideBar/>





</>
  )
}
export default ViewAllStudents;
