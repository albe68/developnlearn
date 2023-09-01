import END_POINTS from '../../../constants/endpoints';
import {viewCourseService,enrollStudentService,IndividualCourseService} from '../../services/course/course-service' 

export const viewCourse=()=>{
  return  viewCourseService(END_POINTS.VIEW_COURSE);
};

export const enrollStudent=(courseId,paymentInfo)=>{
  return enrollStudentService(END_POINTS.ENROLL,courseId,paymentInfo);
};

export const IndividualCourseSingle=()=>{
  return IndividualCourseService(END_POINTS.INDIVIDUAL_COURSE,"64ccf7b1221b3305caa73f40");
}