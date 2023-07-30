import { createBrowserRouter } from "react-router-dom";
import {Student,Instructor,Admin} from './App'
import StudentLoginPage from "./components/pages/student/StudentLoginPage";
import StudentHomePage from "./components/pages/student/StudentHomePage";
import StudentRegisterPage from "./components/pages/student/StudentRegisterPage";
import InstructorLoginPage from "./components/pages/instructor/instructorLoginPage";
import InstructorHomePage from "./components/pages/instructor/instructorHomePage";
import AdminLoginPage from './components/pages/admin/adminLoginPage';
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
    path:'/instructor/login',
    element:<InstructorLoginPage/>
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
},{
    path:'/admin',
    element:<Admin/>,
    children:[
        {
            path:'/admin/login',
            element:<AdminLoginPage/>,
        }
    ]
}
])
export default AppRouter;