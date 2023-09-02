import { CourseDbRepositoryInterface, courseDbRepository } from "@src/app/repositories/courseDbRepository"
import { AddCourseDetailsInterface } from "@src/types/courseInterface";
import { SavedCourseDetailsInterface } from "@src/types/courseInterface";
export const getIndividualCourseU=async(
courseId:string,
courseDbRepository:ReturnType<CourseDbRepositoryInterface>
)=>{
   return courseDbRepository.getIndividualCourse(courseId);

   
};

export const editCourseU=async(
    courseId:string,
    courseDbRepository:ReturnType<CourseDbRepositoryInterface>,
    updateInfo:SavedCourseDetailsInterface
)=>{
    return courseDbRepository.editCourse(courseId,updateInfo);
   }

export const deleteCourseU=async(
    courseId:string,
    courseDbRepository:ReturnType<CourseDbRepositoryInterface>,

)=>{
    return courseDbRepository.deleteCourse(courseId);
};

export const paymentDetailsU=async(
    courseDbRepository:ReturnType<CourseDbRepositoryInterface>
)=>{
    return courseDbRepository.viewPaymentDetails();
}

export const coursesTagsU=async(
    courseDbRepository:ReturnType<CourseDbRepositoryInterface>

)=>{
    return courseDbRepository.coursesTags();

}

