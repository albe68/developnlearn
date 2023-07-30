// import express from 'express'
// import studentController from '../../../adapters/controllers/studentController';
// import { studentDbRepository } from '../../../app/repositories/studentDbRepository';
// import { studentRepositoryMongoDB } from '../../../frameworks/database/mongoDB/repositories/studentRepoMongoDB';
// import { authService } from '../../services/authService';
// import { authServiceInterface } from '../../../app/services/authServiceInterface';

// const studentRouter=()=>{
//     const router=express.Router();
//     const controller=
//         studentController(
//             authServiceInterface,
//             authService,
//             studentDbRepository,
//             studentRepositoryMongoDB
//         )
    

//     router.get('/get-all-students',controller.getAllStudents);
//     router.patch('/block-student/:studentId',controller.getAllStudents);

//     return router;

// }
// export default studentRouter;