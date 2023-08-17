import { createBrowserRouter } from "react-router-dom";
import {Student,Instructor,Admin} from './App'
import StudentLoginPage from "./components/pages/student/StudentLoginPage";
import StudentHomePage from "./components/pages/student/StudentHomePage";
import StudentRegisterPage from "./components/pages/student/StudentRegisterPage";
import InstructorLoginPage from "./components/pages/instructor/instructorLoginPage";
import InstructorHomePage from "./components/pages/instructor/InstructorHomePage";
import AdminLoginPage from './components/pages/admin/adminLoginPage';
import StudentMangement from './components/pages/admin/studentMangement'
import AdminHomePage from './components/pages/admin/AdminHomePage'
import InstructorRegisterPage from './components/pages/instructor/instructorRegisterPage'
import CoursesPage from './components/pages/student/CoursesPage';
import StudentsTab from "./components/pages/admin/studentsTab";
import ViewAllInstructors from "./components/pages/admin/viewAllInstructors";
import ViewAllInstructorsRequests from "./components/pages/admin/ViewInstructorsRequests"
import InstructorAddCourse from "./components/pages/instructor/instructorAddCourse";
import CoursesTab from "./components/pages/course/CoursesTab";
import OtpPage from "./components/pages/student/OtpPage";
import EditCourse from "./components/pages/course/editCourse";
import RejectedInstructors from "./components/pages/instructor/rejectedInstructors";
import CourseList from "./components/pages/course/courseList";
import PaymentPage from "./components/pages/payment/stripe-index";

const AppRouter=createBrowserRouter(
    
[
{
    path:"/",
    element: <Student />,
    children:[
    {
        path:"/",
        element:<StudentHomePage/>
    },{
        path:"courses",
        element:<CoursesPage/>
    },{
        path:"/payment",
        element:<PaymentPage/>
    }

]
    
},{
    path:'/login',
        element:<StudentLoginPage/>
},{
    path:'/register',
    element:<StudentRegisterPage/>
},
{
    path:'/otp',
    element:<OtpPage/>
},
{
    path:'/instructors/login',
    element:<InstructorLoginPage/>
},
{
    path:'/instructors/register',
    element:<InstructorRegisterPage/>
},

{
    path:'/instructors',
    element:<Instructor/>,
    children:[
        {
        path:"",
        element:(<InstructorHomePage/>),

        },
        {
            path:'add-course',
            element:<InstructorAddCourse/>
        },{
            path:'courses',
            element:<CoursesTab/>
        },
        {
            path:'edit-course',
            element:<EditCourse/>
        }
    ]
},

{
    path:'admin',
    element:<Admin/>,
    children:[
      {  
        path: "",
        element:(<AdminHomePage/>),
    
    },
    {
        path:"students",
        element:(<StudentsTab/>)
    },{
        path:'instructors',
        element:(<ViewAllInstructors/>)
        
    },
    {
        path:'instructors/requests',
        element:(<ViewAllInstructorsRequests/>)
        
    },
    {
        path:'instructors/rejected-instructors',
        element:(<RejectedInstructors/>)
        
    }




    ]
    
     
    
   
    
},
   {
            path:'/admin/login',
            element:<AdminLoginPage/>,
        },


])
export default AppRouter;