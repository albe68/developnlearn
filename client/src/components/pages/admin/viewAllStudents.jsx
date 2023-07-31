import React,{useEffect} from 'react'
import { getAllStudents,blockStudent,unblockStudent } from '../../../api/endpoints/auth/studentManagement'
import {useSelector,useDispatch} from 'react-redux'
import { setStudents,selectStudents,blockStudent as blockStudentAction } from '../../../redux/reducers/studentSlice'
 const ViewAllStudents =()=> {
    console.log("hi")
    const students = useSelector(selectStudents); // Use the correct selector
  const dispatch = useDispatch();

  const fetchStudents = async () => {
    try {
      const response = await getAllStudents();
      dispatch(setStudents(response?.data));
    } catch (err) {
      console.log("ERROR while fetching students", err);
    }
  };

  const handleBlock = async (studentId, isBlocked) => {
    try {
      if (isBlocked) {
        await unblockStudent(studentId);
      } else {
        await blockStudent(studentId);
        dispatch(blockStudentAction({ studentId }));
      }
    } catch (err) {
      console.log("ERROR while blocking/unblocking student", err);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);
   return (
    <>
  
<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-900 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Student Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Name
                </th>
                <th scope="col" class="px-6 py-3">
                    email
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
                <th scope="col" class="px-6 py-3">
                    <button>Status</button>
                </th>
            </tr>
        </thead>
        <tbody>
            {students.map(student=>(
                  <tr class="bg-white dark:bg-gray-800" key={student._id}>
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {student._id}
                  </th>
                  <td class="px-6 py-4">
                  {student.firstName+" "+student.lastName}

                  </td>
                  <td class="px-6 py-4">
                  {student.email}

                  </td>
                  <td class="px-6 py-4">
                      $2999
                  </td>
                  <td class="px-6 py-4 ">
                    {student.blocked?(
                      <button onClick={()=>handleBlock(student._id)}>Enable Account</button>

                    ):(
                      <button onClick={()=>handleBlock(student._id)}>Disable Account</button>

            )
                
                }
                  </td>
              </tr>
            ))}
          
          
        </tbody>
    </table>
</div>

</>
  )
}
export default ViewAllStudents;
