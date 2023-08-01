import { AuthServiceInterface } from "@src/app/services/authServiceInterface";
import { InstructorRepositoryMongoDB } from "@src/frameworks/database/mongoDB/repositories/instructorDbRepoMongoDB";
import { AuthService } from "@src/frameworks/services/authService";
import {InstructorDbInterface} from '@src/app/repositories/instructorDbRepository'
import { Request,Response } from "express";
import asyncHandler from "express-async-handler";
import {getAllInstructorsU} from '../../app/useCases/management/instructorManagement'

const instructorController=(
    authServiceInterface:AuthServiceInterface,
    authServiceImpl:AuthService,
    instructorDbRepository:InstructorDbInterface,
    instructorDbRepositoryImpl:InstructorRepositoryMongoDB
)=>{

    const dbRepositoryInstructor=instructorDbRepository(instructorDbRepositoryImpl());

    const getAllInstructors=asyncHandler(async(req:Request,res:Response)=>{
     const instructors= await getAllInstructorsU(dbRepositoryInstructor);
     res.status(200).json({
        status:"success",
        message:"Instructors successfully retrived",
        data:instructors
     })
    })


    return{
        getAllInstructors
    }
}
export default instructorController;