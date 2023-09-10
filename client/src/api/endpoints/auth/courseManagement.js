import { addCourseService,allCoursesService,editCourseService } from "../../services/courseManageService";
import END_POINTS from "../../../constants/endpoints";

export const addCourse=(courseData)=>{
    console.log(courseData,'cje')
    return addCourseService(END_POINTS.ADD_COURSE,courseData)
}

export const allCourses=()=>{
    return allCoursesService(END_POINTS.ALL_COURSES)
}

export const editCourse=(editData,courseId)=>{
    return editCourseService(END_POINTS.EDIT_COURSE,editData,courseId)
}


