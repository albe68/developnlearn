const END_POINTS = {
  //STUDENT
  STUDENT_LOGIN: "api/auth/student-login",
  STUDENT_REGISTER: "api/auth/student-register",
  OTP_VERIFY: "api/auth/verify-otp",
  VIEW_COURSE: "api/course/courses",
  GET_CONFIG: "api/payment/stripe/get-config",
  PAYMENT: "api/payment/stripe/create-payment-intent",
  ENROLL: "api/course/enroll-student",
  RAZOR: "api/payment/create-order",
  CAPTURE_RZP: "api/payment/capture",
  INDIVIDUAL_COURSE: "api/course",
  FILTER_COURSE: "api/course/cou/filte",
  ENROLLEDCOURSES: "api/course/courses/enrolled-courses",
  SINGLE: "api/students/view-profile",
  UPDATE_PROFILE: "api/students/edit-profile",
  TAGS: "api/course/courses/tags",
  VIEW_ENROLLED_STUDENTS: "api/course/courses/view-enrolled-students",

  //ADMIN
  GET_ALL_STUDENTS: "/api/students/get-all-students",
  BLOCK_A_STUDENT: "/api/students/block-student/",
  UNBLOCK_A_STUDENT: "/api/students/unblock-student/",
  //INSTRUCTOR
  ADD_COURSE: "/api/course/add-course",
  ALL_COURSES: "/api/course/courses",
  EDIT_COURSE: "/api/course/edit-course/",
  REMOVE_COURSE: "/api/course/remove-course/",
  RESTORE_COURSE: "/api/course/restored-course/",
  GET_PAYMENT_DETAILS: "/api/payment/payment-details",
  ADD_LESSON: "/api/course/instructor/add-lessons-by-course/",
  WATCH_LESSON: "/api/course/:courseId/watch-lesson",
  LIST_LESSON: "/api/course/:courseId/lessons",

  //COMMON
  REFRESH_TOKEN: "api/all/refresh-token/refresh",
};
export default END_POINTS;
