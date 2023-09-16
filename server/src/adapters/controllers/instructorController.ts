import { AuthServiceInterface } from "@src/app/services/authServiceInterface";
import { InstructorRepositoryMongoDB } from "@src/frameworks/database/mongoDB/repositories/instructorDbRepoMongoDB";
import { AuthService } from "@src/frameworks/services/authService";
import {InstructorDbInterface} from "@src/app/repositories/instructorDbRepository";
import { Request,Response } from "express";
import asyncHandler from "express-async-handler";
import {getAllInstructorsU,acceptInstructorRequestU,
        declineInstructorRequestU,
        getInstructorRequestsU,
        getAllRejectedInstructorsU
    } from "../../app/useCases/management/instructorManagement";
import { SendEmailService } from "@src/frameworks/services/sendEmailServices";
import { SendEmailServiceInterface } from "@src/app/services/sendEmailServiceInterface";
const instructorController=(
    
    instructorDbRepository:InstructorDbInterface,
    instructorDbRepositoryImpl:InstructorRepositoryMongoDB,
    emailServiceInterface:SendEmailServiceInterface,
    emailServiceImpl:SendEmailService
)=>{

    const dbRepositoryInstructor=instructorDbRepository(instructorDbRepositoryImpl());
    const emailService=emailServiceInterface(emailServiceImpl());

    
    const getAllInstructors=asyncHandler(async(req:Request,res:Response)=>{
     const instructors= await getAllInstructorsU(dbRepositoryInstructor);
     res.status(200).json({
        status:"success",
        message:"Instructors successfully retrived",
        data:instructors
     });
    });

    const acceptInstructorRequest=asyncHandler(async(req:Request,res:Response)=>{
        const instructorId:string=req.params.instructorId;

        await acceptInstructorRequestU(
            dbRepositoryInstructor,instructorId,
            emailService);
        res.status(200).json({
            state:"success",
            message:"Instructor request accepted successfully",
            data:null
        });

    });

    const declineInstructorRequest=asyncHandler(async(req:Request,res:Response)=>{
        const instructorId:string=req.params.instructorId;
        await declineInstructorRequestU(dbRepositoryInstructor,instructorId,emailService);
        res.status(200).json({
            status:"success",
            message:"Instructor request declined successfully",
            data:null
        });

    });

    const getInstructorRequests=asyncHandler(async(req:Request,res:Response)=>{
     const instructors=await getInstructorRequestsU(dbRepositoryInstructor);
        res.status(200).json({
            status:"success",
            message:"All Instructor Requests retrived successfully",
            data:instructors

        });
    });

    const getAllRejectedInstructors=asyncHandler(async(req:Request,res:Response)=>{
        const rejectedInstructors=await getAllRejectedInstructorsU(dbRepositoryInstructor);
        console.log(rejectedInstructors,"consoled");
        res.status(200).json({
            status:"success",
            message:"All Rejected Instructors retrived successfully",
            data:rejectedInstructors
        });
        
    });






    return{
        getAllInstructors,
        acceptInstructorRequest,
        declineInstructorRequest,
        getInstructorRequests,
        getAllRejectedInstructors
    };
};
export default instructorController;