import END_POINTS from '../../../constants/endpoints';
import {viewCourseService,enrollStudentService} from '../../services/course/course-service' 

export const viewCourse=()=>{
  return  viewCourseService(END_POINTS.VIEW_COURSE);
};

export const enrollStudent=(courseId,paymentInfo)=>{
  return enrollStudentService(END_POINTS.ENROLL,courseId,paymentInfo);
};