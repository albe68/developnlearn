import { AddCourseDetailsInterface } from "@src/types/courseInterface";
import {CourseRepositoryMongoDbInterface} from "@src/frameworks/database/mongoDB/repositories/courseDbRepoMongoDB";

export const courseDbRepository=(
    repository:ReturnType<CourseRepositoryMongoDbInterface>
)=>{
    const addCourse=async (courseDetails:AddCourseDetailsInterface)=>
    await repository.addCourse(courseDetails);

    const allCourses=async()=>await repository.allCourses();
    return{
        addCourse,
        allCourses
    }
};

export type CourseDbRepositoryInterface=typeof courseDbRepository;