import { AddCourseDetailsInterface,SavedCourseDetailsInterface } from "@src/types/courseInterface";
import {CourseRepositoryMongoDbInterface} from "@src/frameworks/database/mongoDB/repositories/courseDbRepoMongoDB";

export const courseDbRepository=(
    repository:ReturnType<CourseRepositoryMongoDbInterface>
)=>{
    const addCourse=async (courseDetails:AddCourseDetailsInterface)=>
    await repository.addCourse(courseDetails);

    const allCourses=async()=>await repository.allCourses();

    const getIndividualCourse=async(courseId:string)=>await repository.getCourseById(courseId);

    const editCourse=async (courseId:string,updateDetails:SavedCourseDetailsInterface)=>
         await repository.editCourse(courseId,updateDetails);

    const deleteCourse=async (courseId:string)=>await repository.deleteCourse(courseId);
    
    const getCourseById=async (courseId:string)=>await repository.getCourseById(courseId);

    const enrollStudent=async(courseId:string,studentId:string)=> await repository.enrollStudent(courseId,studentId);
   
    const viewPaymentDetails=async ()=> await repository.viewPaymentDetails();
    
    const getEnrolledStudentss=async()=> await repository.enrolledStudents();
    
    const  getCoursesByStudent=async()=> await repository.getCoursesByStudent();
    return{
        addCourse,
        allCourses,
        getIndividualCourse,
        editCourse,
        deleteCourse,
        getCourseById,
        enrollStudent,
        viewPaymentDetails,
        getEnrolledStudentss,
        getCoursesByStudent
    };

    
};

export type CourseDbRepositoryInterface=typeof courseDbRepository;