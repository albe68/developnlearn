

 const END_POINTS={
    //STUDENT
    STUDENT_LOGIN:"api/auth/student-login",
    STUDENT_REGISTER:"api/auth/student-register",
    OTP_VERIFY:'api/auth/verify-otp',
    VIEW_COURSE:'api/course/courses',
    GET_CONFIG:'api/payment/stripe/get-config',
    PAYMENT:'api/payment/stripe/create-payment-intent',
    ENROLL:'api/course/enroll-student',

    //ADMIN
    GET_ALL_STUDENTS:"/api/students/get-all-students",
    BLOCK_A_STUDENT:"/api/students/block-student/",
    UNBLOCK_A_STUDENT:"/api/students/unblock-student/",
    //INSTRUCTOR
    ADD_COURSE:"/api/course/add-course",
    ALL_COURSES:"/api/course/courses",
    EDIT_COURSE:"/api/course/edit-course/",
    //COMMON
    REFRESH_TOKEN:"api/all/refresh-token/refresh",
    
}
export default END_POINTS;