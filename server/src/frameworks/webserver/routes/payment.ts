import express from 'express';
import paymentController from '../../../adapters/controllers/paymentController'
import { paymentServiceInterface } from '../../../app/services/paymentServiceInterface';
import { paymentService } from '../../../frameworks/services/paymentService';
import { courseDbRepository } from '../../../app/repositories/courseDbRepository';
import { courseRepositoryMongoDb } from '../../../frameworks/database/mongoDB/repositories/courseDbRepoMongoDB';
const paymentRouter= ()=>{
const router=express.Router();
const controller=paymentController(
    paymentServiceInterface,
    paymentService,
    courseDbRepository,
    courseRepositoryMongoDb
    );


router.get('/stripe/get-config',controller.getConfig);
router.post('/stripe/create-payment-intent',controller.createPaymentIntent);
router.post('/create-order',controller.paymentGateway);

return router;
}

export default paymentRouter;