import { StudentDbInterface } from '../../app/repositories/studentDbRepository'
import { StudentRepositoryMongoDB } from "@src/frameworks/database/mongoDB/repositories/studentRepoMongoDB"
import { AuthServiceInterface } from "@src/app/services/authServiceInterface"
import { AuthService } from "@src/frameworks/services/authService"
import asyncHandler from "express-async-handler"
import { Request,Response } from "express"
import { getAllStudentsU,unBlockStudentU,
    viewProfileU,editProfileU,
    getEnrolledStudentsU } from '../../app/useCases/management/studentManagement';

import {blockStudentU} from '../../app/useCases/management/studentManagement';
import { StudentUpdateInfo } from '@src/types/studentInterface'
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
        });

    }
    
    );
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
        await unBlockStudentU(studentId,dbRepositoryStudent);
        res.status(200).json({
            status:"success",
            message:"Student successfully unblocked",
            data:null
        })
    })

    const viewProfile=asyncHandler(async(req,res)=>{
        const studentId:string=req.params.studentId;
       const student_detail= await viewProfileU(studentId,dbRepositoryStudent);
       res.status(200).json({
        status:"success",
        message:"student profile sucessfully retrivied",
        data:student_detail,
       })


    });

    const editProfile=asyncHandler(async(req,res)=>{
        const studentId:string=req.params.studentId;
        const edit_data:StudentUpdateInfo=req.body;
        await editProfileU(studentId,edit_data,dbRepositoryStudent);
        res.status(200).json({
            status:"success",
            message:"successfull updated profile",
            data:null
        });
    });

    const enrolledStudents=asyncHandler(async(req,res)=>{
        const studentId:string=req.params.studentId;

       const enrolledStudents= await getEnrolledStudentsU(dbRepositoryStudent,studentId);
        res.status(200).json({
            status:"success",
            message:"successfully retrived students",
            data:enrolledStudents
        });
    

    });

    return {
        getAllStudents,
        blockStudent,
        unBlockStudent,
        viewProfile,
        editProfile,
        enrolledStudents,

    };

};

export default studentController;

