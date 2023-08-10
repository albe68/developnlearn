import { addCourseService,allCoursesService } from "../../services/courseManageService";
import END_POINTS from "../../../constants/endpoints";

export const addCourse=(courseData)=>{
    return addCourseService(END_POINTS.ADD_COURSE,courseData)
}

export const allCourses=()=>{
    return allCoursesService(END_POINTS.ALL_COURSES)
}