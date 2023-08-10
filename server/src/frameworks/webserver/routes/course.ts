import express from 'express';
import courseController from '../../../adapters/controllers/courseController' 
import { courseDbRepository } from '../../../app/repositories/courseDbRepository';
import { courseRepositoryMongoDb } from '../../../frameworks/database/mongoDB/repositories/courseDbRepoMongoDB';
import upload from '../middlewares/multer';
import { uploadSingleImage,uploadMultipleVideos   } from '../middlewares/cloudinary';
const courseRouter=()=>{
    const router=express.Router();
    const controller=courseController(
        courseDbRepository,
        courseRepositoryMongoDb
    );

    router.post(
   '/add-course',
   uploadMultipleVideos,
   controller.addCourse,
   )   

   router.get('/courses',controller.allCourses)
    return router; 
}

export default courseRouter;