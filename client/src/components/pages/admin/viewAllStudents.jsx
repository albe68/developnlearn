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
    <button data-drawer-target="default-sidebar" data-drawer-toggle="default-sidebar" aria-controls="default-sidebar" type="button" class="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
   <span class="sr-only">Open sidebar</span>
   <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
   </svg>
</button>

<AdminSideBar/>

  <div class="container mx-auto py-4">
  <div class="overflow-x-auto bg-cyan-50 dark:bg-gray-800 shadow-md rounded-lg">
  <table class="max-w-xs mx-auto w-full text-xs text-left text-gray-500 dark:text-gray-400 table-auto">
    
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400 bg-gray-100 dark:bg-gray-800">
            <tr>
                <th scope="col" class="px-6 py-3 font-semibold">
                    Student ID
                </th>
                <th scope="col" class="px-6 py-3 font-semibold">
                    Name
                </th>
                <th scope="col" class="px-6 py-3 font-semibold">
                    Email
                </th>
                <th scope="col" class="px-6 py-3 font-semibold">
                    Status
                </th>
                <th scope="col" class="px-6 py-3 font-semibold">
                    Actions
                </th>
            </tr>
        </thead>
        <tbody>
            {students.map(student => (
                <tr class="bg-white dark:bg-gray-800" key={student._id}>
                    <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {student._id}
                    </td>
                    <td class="px-6 py-4">
                        {student.firstName} {student.lastName}
                    </td>
                    <td class="px-6 py-4">
                        {student.email}
                    </td>
                    <td class="px-6 py-4">
                        {student?.isBlocked ? (
<span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">Disabled</span>)
 : (<span class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Active</span>)}
                    </td>
                    <td class="px-6 py-4">
                        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none" onClick={() => blockStudentAccount(student._id)}>
                            Disable Account
                        </button>
                        <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none" onClick={() => unblockStudentAccount(student._id)}>
                            Enable Account
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>
</div>


</>
  )
}
export default ViewAllStudents;
