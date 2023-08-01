import { instructorDbRepository } from '../../../app/repositories/instructorDbRepository';
import { authServiceInterface } from '../../../app/services/authServiceInterface';
import { instructorDbRepoMongoDB } from '../../../frameworks/database/mongoDB/repositories/instructorDbRepoMongoDB';
import { authService } from '../../../frameworks/services/authService';
import instructorController from '../../../adapters/controllers/instructorController';

import express from 'express';
const instructorRouter=()=>{
    const router=express.Router()
    const controller=instructorController(
        authServiceInterface,
        authService,
        instructorDbRepository,
        instructorDbRepoMongoDB
    )

    router.get('/get-all-instructors',controller.getAllInstructors);
    return router;

}
export default instructorRouter;