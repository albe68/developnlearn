import express from "express";
import paymentController from "../../../adapters/controllers/paymentController";
import { paymentServiceInterface } from "../../../app/services/paymentServiceInterface";
import { paymentService } from "../../../frameworks/services/paymentService";
import { courseDbRepository } from "../../../app/repositories/courseDbRepository";
import { courseRepositoryMongoDb } from "../../../frameworks/database/mongoDB/repositories/courseDbRepoMongoDB";
import { paymentInterface } from "../../../app/repositories/paymentDbRepository";
import { paymentRepoMongoDb } from "../../../frameworks/database/mongoDB/repositories/paymentRepoMongoDb";
import jwtAuthMiddleware from "../middlewares/userAuth";
import { instructorRoleAuthMiddleware } from "../middlewares/roleAuthMiddleware";
const paymentRouter = () => {
  const router = express.Router();
  const controller = paymentController(
    paymentServiceInterface,
    paymentService,
    courseDbRepository,
    courseRepositoryMongoDb,
    paymentInterface,
    paymentRepoMongoDb
  );

  router.get("/stripe/get-config", controller.getConfig);
  router.post("/stripe/create-payment-intent", controller.createPaymentIntent);
  router.post("/create-order", controller.paymentGateway);
  router.get(
    "/payment-details",
    jwtAuthMiddleware,
    instructorRoleAuthMiddleware,
    controller.paymentDetails
  );

  return router;
};

export default paymentRouter;
