import { CourseDbRepositoryInterface, courseDbRepository } from "@src/app/repositories/courseDbRepository";
import { AddCourseDetailsInterface } from "@src/types/courseInterface";
import { uploadSingleImage } from "@src/frameworks/webserver/middlewares/cloudinary";
export const AddCourse=async(
    files:Express.Multer.File[],
    courseDetails:AddCourseDetailsInterface,
    courseDbRepository:ReturnType<CourseDbRepositoryInterface>
)=>{

    if(files){
        const uploadPromises=files.map(async (file)=>{
            console.log(file,"here are you")
        })
    }


    courseDbRepository.addCourse(courseDetails);
}

export const allCoursesU=async(
    courseDbRepository:ReturnType<CourseDbRepositoryInterface>
)=>{
  return  courseDbRepository.allCourses();
}
