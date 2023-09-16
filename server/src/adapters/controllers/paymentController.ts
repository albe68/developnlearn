import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  getConfigU,
  createPaymentIntentU,
  paymentGatewayU,
  paymentDetailsU
} from "../../app/useCases/payment/stripe";
import { PaymentServiceInterface } from "@src/app/services/paymentServiceInterface";
import { PaymentServiceImpl } from "@src/frameworks/services/paymentService";
import { CourseDbRepositoryInterface } from "@src/app/repositories/courseDbRepository";
import { CourseRepositoryMongoDbInterface } from "@src/frameworks/database/mongoDB/repositories/courseDbRepoMongoDB";
import configKeys from "../../config";
import { PaymentImplInterface } from "@src/frameworks/database/mongoDB/repositories/paymentRepoMongoDb";
import { PaymentInterface } from "@src/app/repositories/paymentDbRepository";

const paymentController = (
  paymentServiceInterface: PaymentServiceInterface,
  paymentServiceImpl: PaymentServiceImpl,
  courseDbInterface: CourseDbRepositoryInterface,
  courseDbImpl: CourseRepositoryMongoDbInterface,
  paymentDbRepository: PaymentInterface,
  paymentDbRepositoryImpl: PaymentImplInterface
) => {
  const paymentService = paymentServiceInterface(paymentServiceImpl());
  const dbCourseRepository = courseDbInterface(courseDbImpl());
  const dbPaymentRepository = paymentDbRepository(paymentDbRepositoryImpl());

  const getConfig = asyncHandler(async (req: Request, res: Response) => {
    const config = getConfigU(paymentService);
    res.status(200).json({
      status: "success",
      message: "Succesfully configured your payment",
      data: config,
    });
  });

  const createPaymentIntent = asyncHandler(
    async (req: Request, res: Response) => {
      const courseId = req.params.courseId;
      const response = await createPaymentIntentU(
        courseId,
        paymentService,
        dbCourseRepository
      );
      const { client_secret } = response;
      res.status(200).json({
        success: "success",
        message: "client secret sucessfully sent!",
        data: {
          clientSecret: client_secret,
        },
      });
    }
  );

  const paymentGateway=asyncHandler(async(req,res)=>{
  const {amount}=req.body;
  console.log("am",amount);
  const rzp_id=configKeys.RAZOR_PAY_ID;
   const order= await paymentGatewayU(amount);
    console.log(order,"chcek");
   res.status(200).json({
    status:"sucess",
    message:"created order_id and sent to client",
    data:{
      order,
      rzp_id
    }
   });
  });

  const paymentDetails=asyncHandler(async(req,res)=>{
   const paymentDetails= await paymentDetailsU(dbPaymentRepository);
   console.log(paymentDetails,"payload return");
   res.status(200).json({
    status:"success",
    message:"payment details successfully retrieved",
    data: paymentDetails
   });
  });
  return {
    getConfig,
    createPaymentIntent,
    paymentGateway,
    paymentDetails
  };
};

export default paymentController;
