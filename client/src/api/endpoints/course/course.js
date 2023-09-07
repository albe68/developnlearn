import END_POINTS from "../../../constants/endpoints";
import {
  viewCourseService,
  enrollStudentService,
  IndividualCourseService,
  filterService,
  enrolledCourseService,
  tagsService,
  removeCourseService,
  restoreCourseService
} from "../../services/course/course-service";

export const viewCourse = () => {
  return viewCourseService(END_POINTS.VIEW_COURSE);
};

export const enrollStudent = (courseId, paymentInfo) => {
  return enrollStudentService(END_POINTS.ENROLL, courseId, paymentInfo);
};

export const IndividualCourseSingle = (courseId) => {
  return IndividualCourseService(
    END_POINTS.INDIVIDUAL_COURSE,
    courseId
  );
};

export const filterProducts = (searchQuery) => {
  return filterService(END_POINTS.FILTER_COURSE, searchQuery);
};

export const enrolledCourses = (studentId) => {
  return enrolledCourseService(END_POINTS.ENROLLEDCOURSES, studentId);
};

export const getTags = () => {
  return tagsService(END_POINTS.TAGS);
};

export const removeCourse=(courseId)=>{
  return removeCourseService(END_POINTS.REMOVE_COURSE,courseId)
};

export const restoreCourse=(courseId)=>{
  return restoreCourseService(END_POINTS.RESTORE_COURSE,courseId)
};