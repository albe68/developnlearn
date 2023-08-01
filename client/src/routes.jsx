import { createBrowserRouter } from "react-router-dom";
import {Student,Instructor,Admin} from './App'
import StudentLoginPage from "./components/pages/student/StudentLoginPage";
import StudentHomePage from "./components/pages/student/StudentHomePage";
import StudentRegisterPage from "./components/pages/student/StudentRegisterPage";
import InstructorLoginPage from "./components/pages/instructor/instructorLoginPage";
import InstructorHomePage from "./components/pages/instructor/instructorHomePage";
import AdminLoginPage from './components/pages/admin/adminLoginPage';
import StudentMangement from './components/pages/admin/studentMangement'
import AdminHomePage from './components/pages/admin/adminHomePage'
import InstructorManagement from './components/pages/admin/instructorManagement'
import InstructorRegisterPage from './components/pages/instructor/instructorRegisterPage'
const AppRouter=createBrowserRouter(
    
[
{
    path:"/",
    element: <Student />,
    children:[
    {
        path:"/",
        element:<StudentHomePage/>
    }]
    
},{
    path:'/login',
        element:<StudentLoginPage/>
},{
    path:'/register',
    element:<StudentRegisterPage/>
},{
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
        path:'/instructors',
        element:<InstructorHomePage/>,

        }
    ]
},
{
    path:'/admin',
    element:<AdminHomePage/>,
    
     
    
   
    
},
   {
            path:'/admin/login',
            element:<AdminLoginPage/>,
        },
{
    path:'/admin/students',
    element:<StudentMangement/>
    
},{
    path:'/admin/instructors',
    element:<InstructorManagement/>
    
}

])
export default AppRouter;