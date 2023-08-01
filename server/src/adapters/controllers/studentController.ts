import { StudentDbInterface } from '../../app/repositories/studentDbRepository'
import { StudentRepositoryMongoDB } from "@src/frameworks/database/mongoDB/repositories/studentRepoMongoDB"
import { AuthServiceInterface } from "@src/app/services/authServiceInterface"
import { AuthService } from "@src/frameworks/services/authService"
import asyncHandler from "express-async-handler"
import { Request,Response } from "express"
import {getAllStudentsU,unBlockStudentU} from '../../app/useCases/management/studentManagement'
import {blockStudentU} from '../../app/useCases/management/studentManagement'

const studentController=(
    authServiceInterface:AuthServiceInterface,
    authServiceImpl:AuthService,
    studentDbRepository:StudentDbInterface,
    studentDbRepositoryImpl:StudentRepositoryMongoDB
)=>{
    const dbRepositoryStudent=studentDbRepository(studentDbRepositoryImpl());
    const authService=authServiceInterface(authServiceImpl());

    const getAllStudents=asyncHandler(async(req:Request,res:Response)=>{
        const students=await getAllStudentsU(dbRepositoryStudent);
        res.status(200).json({
            status:'success',
            message:'successylly retrieved all students',
            data:students
        })

    }
    
    )
    const blockStudent=asyncHandler(async(req:Request,res:Response)=>{
        const studentId:string=req.params.studentId;
        // const reason:string=req.body.reason;
        await blockStudentU(studentId,dbRepositoryStudent);
        res.status(200).json({
            status:"success",
            message:"Student  Successfully blocked",
            data:null
        })
        

    })

    const unBlockStudent=asyncHandler (async(req:Request,res:Response)=>{
        const studentId:string=req.params.studentId;
        console.log(studentId,"requested Id")
        await unBlockStudentU(studentId,dbRepositoryStudent);
        res.status(200).json({
            status:"success",
            message:"Student successfully unblocked",
            data:null
        })
    })

    return {
        getAllStudents,
        blockStudent,
        unBlockStudent
    }
}

export default studentController;

