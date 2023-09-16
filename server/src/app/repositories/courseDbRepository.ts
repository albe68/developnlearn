import { AddCourseDetailsInterface,SavedCourseDetailsInterface } from "@src/types/courseInterface";
import {CourseRepositoryMongoDbInterface} from "@src/frameworks/database/mongoDB/repositories/courseDbRepoMongoDB";
import {AddLessonInterface } from "@src/types/LessonInterface"

export const courseDbRepository=(
    repository:ReturnType<CourseRepositoryMongoDbInterface>
)=>{
    const addCourse=async (courseDetails:AddCourseDetailsInterface)=>await repository.addCourse(courseDetails);

    const allCourses=async()=>await repository.allCourses();

    const getIndividualCourse=async(courseId:string)=>await repository.getCourseById(courseId);

    const editCourse=async (courseId:string,updateDetails:SavedCourseDetailsInterface)=>
    await repository.editCourse(courseId,updateDetails);

    const deleteCourse=async (courseId:string)=>await repository.deleteCourse(courseId);
    
    const getCourseById=async (courseId:string)=>await repository.getCourseById(courseId);

    const enrollStudent=async(courseId:string,studentId:string)=> await repository.enrollStudent(courseId,studentId);
   
    const viewPaymentDetails=async ()=> await repository.viewPaymentDetails();
    
    const getEnrolledStudentss=async(studentId:string)=> await repository.enrolledStudents(studentId);
    
    const  getCoursesByStudent=async()=> await repository.getCoursesByStudent();

    const filterCourses=async(keyword:string)=> await repository.filterCourses(keyword);

    const coursesTags=async()=> await repository.coursesTags();

    const enrolledCoursesForStudent=async(studentId:string)=> await repository.enrolledCoursesForStudent(studentId);

    const reallocateCourses=async (courseId:string)=>await repository.reallocateCourses(courseId);

    const addLessons=async (lessonDetails:AddLessonInterface,courseId:string)=> await repository.addLesson(lessonDetails,courseId)
    
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
        getCoursesByStudent,
        filterCourses,
        coursesTags,
        enrolledCoursesForStudent,
        reallocateCourses,
        addLessons
    };

    
};

export type CourseDbRepositoryInterface=typeof courseDbRepository;