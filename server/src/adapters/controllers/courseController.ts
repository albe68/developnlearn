import { Request,Response,NextFunction } from "express"
import asyncHandler from "express-async-handler";
import { CourseDbRepositoryInterface } from "@src/app/repositories/courseDbRepository" 
import { CourseRepositoryMongoDbInterface } from "@src/frameworks/database/mongoDB/repositories/courseDbRepoMongoDB";
import { AddCourse,allCoursesU } from "../../app/useCases/course/addCourse";
import { AddCourseDetailsInterface } from "@src/types/courseInterface";
const courseController=(
    courseDbRepository:CourseDbRepositoryInterface,
    courseDbRepositoryImpl:CourseRepositoryMongoDbInterface,
)=>{
  
    const dbRepositoryCourse=courseDbRepository(courseDbRepositoryImpl());

    const addCourse=asyncHandler(
        async(req:Request,res:Response)=>{
            const course:AddCourseDetailsInterface=req.body;
            const files:Express.Multer.File[]=req.files as Express.Multer.File[];
            console.log(files,"init")
       const response=await AddCourse(
        files,        
        course,
        dbRepositoryCourse
             )

             res.status(200).json({
                status:"success",
                message:"course added successfully",
                data:response
                
             })

        }
    )

    const allCourses=asyncHandler(
        async(req:Request,res:Response)=>{
          const courses=  await allCoursesU(dbRepositoryCourse);

          res.status(200).json({
            status:"success",
            message:"courses listed successfully",
            data:courses
          })
        }
    )

    return{
        addCourse,
        allCourses
    }
}

export default courseController;