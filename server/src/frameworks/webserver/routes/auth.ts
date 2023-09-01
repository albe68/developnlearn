import express from 'express';
import {studentDbRepository} from '../../../app/repositories/studentDbRepository'
import authController from "../../../adapters/controllers/authController";
import { authServiceInterface } from '../../../app/services/authServiceInterface';

import { authService } from '../../../frameworks/services/authService';
import { studentRepositoryMongoDB } from '../../database/mongoDB/repositories/studentRepoMongoDB';
import { refreshTokenDbRepository } from '../../../app/repositories/refreshTokenDbRepository';
import { refreshTokenDbRepositoryMongoDB } from '../../database/mongoDB/repositories/refreshTokenRepoMongoDB';
import { adminDbRepository } from '../../../app/repositories/adminDbRepository';
import { adminRepoMongoDb } from '../../database/mongoDB/repositories/adminRepoMongoDB';
import  {instructorDbRepository} from '../../../app/repositories/instructorDbRepository'
import { instructorDbRepoMongoDB } from '../../database/mongoDB/repositories/instructorDbRepoMongoDB';
import { sendEmailService } from "../../../frameworks/services/sendEmailServices";
import { sendEmailServiceInterface } from "../../../app/services/sendEmailServiceInterface";
import { otpDbRepository } from '../../../app/repositories/otpDbRepository';
import { otpDbRepoMongoDb } from '../../database/mongoDB/repositories/otpRepoMongoDB';
const AuthRouter=()=>{
    const router=express.Router();
    //importing exported types of the below params
    const controller= authController(
        authServiceInterface,
        authService,
        studentDbRepository,
        studentRepositoryMongoDB,
        refreshTokenDbRepository,
        refreshTokenDbRepositoryMongoDB,
        instructorDbRepository,
        instructorDbRepoMongoDB,
        adminDbRepository,
        adminRepoMongoDb,
        sendEmailServiceInterface,
        sendEmailService,
        otpDbRepository,
        otpDbRepoMongoDb
       )
    //Student
    router.post("/student-register",controller.registerStudent);
    router.post("/student-login",controller.loginStudent);
    router.get("/student-logout",controller.logoutStudent)

    //Instructor
    router.post("/instructor-register",controller.registerInstructor);
    router.post('/instructor-login',controller.loginInstructor);
    //Admin
    router.post("/admin/admin-login",controller.loginAdmin);
    //common
    router.post("/verify-otp",controller.verifyEmail)
    return router;
}
export default AuthRouter;