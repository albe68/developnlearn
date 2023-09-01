import express from 'express'
import studentController from '../../../adapters/controllers/studentController';
import { studentDbRepository } from '../../../app/repositories/studentDbRepository';
import { studentRepositoryMongoDB } from '../../../frameworks/database/mongoDB/repositories/studentRepoMongoDB';
import { authService } from '../../services/authService';
import { authServiceInterface } from '../../../app/services/authServiceInterface';
import jwtAuthMiddleware from '../middlewares/userAuth';
const studentRouter=()=>{
    const router=express.Router();
    const controller=
        studentController(
            authServiceInterface,
            authService,
            studentDbRepository,
            studentRepositoryMongoDB
        )
    

    router.get('/get-all-students',controller.getAllStudents);
    router.patch('/block-student/:studentId',controller.blockStudent);
    router.patch('/unblock-student/:studentId',controller.unBlockStudent);
    router.get('/view-profile/:studentId',controller.viewProfile);
    router.patch('/edit-profile/:studentId',controller.editProfile);
    router.get('/view-enrolled-students',controller.enrolledStudents);

    return router;

}
export default studentRouter;