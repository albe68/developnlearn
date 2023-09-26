import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Student, Instructor, Admin } from "./App";
import ErrorPage from "./components/common/errorPage";
import StudentLoginPage from "./components/pages/student/StudentLoginPage";
import StudentHomePage from "./components/pages/student/StudentHomePage";
import StudentRegisterPage from "./components/pages/student/StudentRegisterPage";
import InstructorLoginPage from "./components/pages/instructor/instructorLoginPage";
import InstructorHomePage from "./components/pages/instructor/InstructorHomePage";
import AdminLoginPage from "./components/pages/admin/adminLoginPage";
// import StudentMangement from "./components/pages/admin/studentMangement";
import AdminHomePage from "./components/pages/admin/AdminHomePage";
import InstructorRegisterPage from "./components/pages/instructor/instructorRegisterPage";
import StudentsTab from "./components/pages/admin/studentsTab";
import ViewAllInstructors from "./components/pages/admin/viewAllInstructors";
import ViewAllInstructorsRequests from "./components/pages/admin/ViewInstructorsRequests";
import InstructorAddCourse from "./components/pages/instructor/instructorAddCourse";
import CoursesTab from "./components/pages/course/CoursesTab";
import OtpPage from "./components/pages/student/OtpPage";
import EditCoursePage from "./components/pages/course/editCourse";
import RejectedInstructors from "./components/pages/instructor/rejectedInstructors";
// import CourseList from "./components/pages/course/courseList";
import PaymentPage from "./components/pages/payment/stripe-index";
import StudentProfile from "./components/pages/student-dashboard/student-profile";
import UserDashboard from "./components/pages/student-dashboard/student-dashboard";
import IndividualCourse from "./components/pages/course/viewCourse";
import Studentcourses from "./components/pages/student-dashboard/student-courses";
import DashHome from "./components/pages/student-dashboard/dash-home";
import EnrolledStudents from "./components/pages/enrolled-students/enrolledStudents";
import CouseDetailIndexPage from "./components/pages/course-detail-instructor/course-detail-instructor-index";
import PaymentDetailIndexPage from "./components/pages/payment-detail/payment-detail-index";
import AddLessonIndex from "./components/pages/add-lesson/add-lesson-index";
import WatchLessonIndex from "./components/pages/watch-lesson/watch-lesson-index";
const LazyCourseList = lazy(() =>
  import("./components/pages/course/list-courses-user.js/index-courses")
);
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Student />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<div>Loading</div>}>
            <StudentHomePage />
          </Suspense>
        ),
      },
      {
        path: "courses",

        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LazyCourseList />,
          </Suspense>
        ),
      },
      {
        path: "payment",
        element: <PaymentPage />,
      },

      {
        path: "/courses/:courseId",
        element: <IndividualCourse />,
        children: [
          {
            path: "/courses/:courseId/watch-course",
            element: <WatchLessonIndex />,
          },
        ],
      },
      {
        path: "/watch-course",
        element: <WatchLessonIndex />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <UserDashboard />,
    children: [
      {
        path: "",
        element: <DashHome />,
      },
      {
        path: "/dashboard/profile",
        element: <StudentProfile />,
      },
      {
        path: "/dashboard/profile",
        element: <StudentProfile />,
      },
      {
        path: "/dashboard/my-courses",
        element: <Studentcourses />,
      },
    ],
  },
  {
    path: "/login",
    element: <StudentLoginPage />,
  },
  {
    path: "/register",
    element: <StudentRegisterPage />,
  },
  {
    path: "/otp",
    element: <OtpPage />,
  },
  {
    path: "/instructors/login",
    element: <InstructorLoginPage />,
  },
  {
    path: "/instructors/register",
    element: <InstructorRegisterPage />,
  },

  {
    path: "/instructors",
    element: <Instructor />,
    children: [
      {
        path: "",
        element: <InstructorHomePage />,
      },
      {
        path: "add-course",
        element: <InstructorAddCourse />,
      },
      {
        path: "courses",
        element: <CoursesTab />,
      },
      {
        path: "edit-courses/:courseId",
        element: <EditCoursePage />,
      },
      {
        path: "view-enrolled-students/:courseId",
        element: <EnrolledStudents />,
      },
      {
        path: "course-detail-index/:courseId",
        element: <CouseDetailIndexPage />,
      },
      {
        path: "payment-detail-index",
        element: <PaymentDetailIndexPage />,
      },
      {
        path: "add-lesson/:courseId",
        element: <AddLessonIndex />,
      },
    ],
  },

  {
    path: "admin",
    element: <Admin />,
    children: [
      {
        path: "",
        element: <AdminHomePage />,
      },
      {
        path: "students",
        element: <StudentsTab />,
      },
      {
        path: "instructors",
        element: <ViewAllInstructors />,
      },
      {
        path: "instructors/requests",
        element: <ViewAllInstructorsRequests />,
      },
      {
        path: "instructors/rejected-instructors",
        element: <RejectedInstructors />,
      },
      {
        path: "payment-detail-index",
        element: <PaymentDetailIndexPage />,
      },
    ],
  },
  {
    path: "/admin/login",
    element: <AdminLoginPage />,
  },
]);
export default AppRouter;
