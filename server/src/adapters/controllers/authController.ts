import { Request,Response }  from 'express';
import asyncHandler from 'express-async-handler';
import { AuthService } from '../../frameworks/services/authService'
import { AuthServiceInterface } from '@src/app/services/authServiceInterface';
import { StudentDbInterface } from '@src/app/repositories/studentDbRepository';
import { StudentRepositoryMongoDB } from '@src/frameworks/database/mongoDB/repositories/studentRepoMongoDB';
import { studentRegister,studentLogin } from '../../app/useCases/auth/studentAuth'
import { RefreshTokenDbInterface, refreshTokenDbRepository } from '@src/app/repositories/refreshTokenDbRepository';
import { RefreshTokenRepositoryMongoDB } from '@src/frameworks/database/mongoDB/repositories/refreshTokenRepoMongoDB';
import { StudentRegisterInterface } from '@src/types/studentRegisterInterface';
import { AdminDbInterface } from '@src/app/repositories/adminDbRepository'
import { AdminRepositoryMongoDb } from '@src/frameworks/database/mongoDB/repositories/adminRepoMongoDB';
import { adminLogin } from '../../app/useCases/auth/adminAuth' 
import { instructorRegister,instructorLogin } from '../../app/useCases/auth/instructorAuth';
import { InstructorInterface } from '@src/types/instructorInterface';
import { InstructorDbInterface } from '@src/app/repositories/instructorDbRepository';
import { InstructorRepositoryMongoDB } from '@src/frameworks/database/mongoDB/repositories/instructorDbRepoMongoDB';

const authController=(
    AuthServiceInterface:AuthServiceInterface,
    authServiceImpl:AuthService,
    studentDbRepository:StudentDbInterface,
    studentDbRepositoryImpl:StudentRepositoryMongoDB,
    refreshTokenDbRepository:RefreshTokenDbInterface,
    refreshTokenDbRepositoryImpl:RefreshTokenRepositoryMongoDB,
    instructorDbRepository:InstructorDbInterface,
    instructorDbRepositoryImpl:InstructorRepositoryMongoDB,
    adminDbRepository:AdminDbInterface,
    adminDbRepositoryImpl:AdminRepositoryMongoDb
    )=>{

    const dbRepositoryUser =studentDbRepository(studentDbRepositoryImpl());
    const dbRepositoryRefreshToken=refreshTokenDbRepository(refreshTokenDbRepositoryImpl()) //check these two  refreshTokenDbRepository and refreshTokenDbRepositoryImpl 
    const authService=AuthServiceInterface(authServiceImpl());

    const dbRepositoryAdmin=adminDbRepository(adminDbRepositoryImpl());
    
    const dbRepositoryInstructor=instructorDbRepository(instructorDbRepositoryImpl());
    //Student
    const registerStudent=asyncHandler(async(req:Request,res:Response)=>{
        const student:StudentRegisterInterface = req.body;   
        const {accessToken,refreshToken}=await studentRegister(
            student,
            dbRepositoryUser,
            dbRepositoryRefreshToken,
            authService
            );
        res.status(200).json({
            status:'success',
            message:'Successfully registered user',
            accessToken,
            refreshToken
        })
    })

    const loginStudent=asyncHandler(async(req:Request,res:Response)=>{
        const {email,password}:{email:string;password:string}=req.body;
        console.log("AUTH ROUTE CALLED for real");
        const {accessToken,refreshToken}= await studentLogin(
            email,
            password,
            dbRepositoryUser,
            dbRepositoryRefreshToken,
            authService
        )

        res.status(200).json({
            status:'success',
            message:'User logged In successfully',
            accessToken,
            refreshToken
        })
    })

    const logoutStudent=asyncHandler((req:Request,res:Response)=>{
        console.log('Cookies: ', req.cookies)   

    })

    const registerInstructor=asyncHandler(async(req:Request,res:Response)=>{
        const instructor: InstructorInterface=req.body;
        
        await instructorRegister(
        instructor,dbRepositoryInstructor,authService
            )
            res.status(200).json({
                status:'success',
                message:'your registeration is pending verification by adminstrators'
            })

    })

    const loginInstructor =asyncHandler(async(req:Request,res:Response)=>{
        const {email,password}:{email:string,password:string}=req.body;
        const {accessToken,refreshToken}=await instructorLogin(
            email,
            password,
            dbRepositoryInstructor,
            dbRepositoryRefreshToken,
            authService
            );

            res.status(200).json({
                status:'success',
                message:'instructor logged In successfully',
                accessToken,
                refreshToken
            })
            })

    const loginAdmin=asyncHandler(async(req:Request,res:Response)=>{
        const{email,password}:{email:string;password:string}=req.body;
        console.log("controller",email,password)
        const{accessToken,refreshToken}=await adminLogin(
            email,
            password,
            dbRepositoryAdmin,
            dbRepositoryRefreshToken,
            authService
            
        );
        console.log("controller out")

        res.status(200).json({
            status:'success',
            message:'admin successfully logged in',
            accessToken,
            refreshToken
        })



    })

    return {
        registerStudent,
        loginStudent,
        logoutStudent,
        registerInstructor,
        loginInstructor,
        loginAdmin
    };
}

export default authController;

