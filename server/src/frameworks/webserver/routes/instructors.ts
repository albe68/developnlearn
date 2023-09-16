import { instructorDbRepository } from "../../../app/repositories/instructorDbRepository";
import { authServiceInterface } from "../../../app/services/authServiceInterface";
import { instructorDbRepoMongoDB } from "../../../frameworks/database/mongoDB/repositories/instructorDbRepoMongoDB";
import { authService } from "../../../frameworks/services/authService";
import instructorController from "../../../adapters/controllers/instructorController";
import { sendEmailService } from "../../../frameworks/services/sendEmailServices";
import { sendEmailServiceInterface } from "../../../app/services/sendEmailServiceInterface";
import express from "express";
const instructorRouter=()=>{
    const router=express.Router();
    const controller=instructorController(
       
        instructorDbRepository,
        instructorDbRepoMongoDB,
        sendEmailServiceInterface,
        sendEmailService,
        

    );

    router.get("/get-all-instructors",controller.getAllInstructors);
    router.patch("/accept-instructor-request/:instructorId",controller.acceptInstructorRequest);
    router.patch("/decline-instructor-request/:instructorId",controller.declineInstructorRequest);
    router.get("/instructor-requests",controller.getInstructorRequests);
    router.get("/get-all-rejected-instructors",controller.getAllRejectedInstructors);
    return router;

};
export default instructorRouter;