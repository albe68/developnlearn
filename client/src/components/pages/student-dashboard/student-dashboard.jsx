import StudentSideBar from "./student-side-bar";
import { Outlet } from "react-router-dom";
import Navbar from "../../navBar";
export default function UserDashboard() {
  return (
    <div className="flex">
      
      <StudentSideBar  />
      <Outlet  />
    </div>
  );
}
