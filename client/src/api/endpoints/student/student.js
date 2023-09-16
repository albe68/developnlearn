import END_POINTS from "../../../constants/endpoints";
import {
    SingleStudentDetailService,
    updateProfileService,
    enrolledStudentsService
} from "../../services/student/studentManageService";

export const SingleStudentDetail = (studentID) => {
  return SingleStudentDetailService(END_POINTS.SINGLE,studentID);
};


export const updateProfile = (studentPayload,studentId) => {
  return updateProfileService(END_POINTS.UPDATE_PROFILE,studentPayload,studentId);
};

export const enrolledStudentsForInstructor=(courseId)=>{
  return enrolledStudentsService(END_POINTS.VIEW_ENROLLED_STUDENTS,courseId);

}
