import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import StudentLoginPage from "../src/components/pages/student/StudentLoginPage";
import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import AdminSideBar from "./components/AdminSideBar";
import InstructorSideBar from "./components/pages/instructor/InstructorSideBar";
import Navbar from "./components/navBar";
import SessionExpiredModal from "./components/common/sessionExpiredModal";
import AdminHeader from "./components/pages/admin-dashboard/admin-header";
export const Student = () => {
  const [showSessionExpiredModal, setshowSessionExpiredModal] = useState(false);

  const handlecloseexpired = () => {
    setshowSessionExpiredModal(false);
  };
  useEffect(() => {
    const handleSessionexpires = () => {
      setshowSessionExpiredModal(true);
    };
    window.addEventListener("sessionExpired", handleSessionexpires);
    return () => {
      window.removeEventListener("sessionExpired", handleSessionexpires);
    };
  }, []);
  return (
    <>
      {showSessionExpiredModal && (
        <SessionExpiredModal
          show={showSessionExpiredModal}
          onClose={handlecloseexpired}
        />
      )}

      <Outlet />
    </>
  );
};

export const Instructor = () => {
  return (
    <div className="flex ">
      <div className="lg:w-4/2 ">
        <InstructorSideBar />
      </div>
      <div className=" lg:w-full bg-gray-100 p-4">
        <Outlet />
      </div>
    </div>
  );
};

export const Admin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <div className="w-1/4 lg:w-1/5">
        <AdminSideBar />
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
      <div className="w-3/4 lg:w-4/5 bg-gray-100 p-4">
        <Outlet />
      </div>
    </div>
  );
};
