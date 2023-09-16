import { PaymentServiceInterface } from "@src/app/services/paymentServiceInterface";
import { paymentService } from "@src/frameworks/services/paymentService";
import AppError from "@src/utils/appError";
import { CourseDbRepositoryInterface } from "@src/app/repositories/courseDbRepository";
// import Razorpay from "razorpay";
import Razorpay from "razorpay";
import configKeys from "../../../config";
import { PaymentInterface } from "../../repositories/paymentDbRepository";

export const createPaymentIntentU = async (
  courseId: string,
  paymentService: ReturnType<PaymentServiceInterface>,
  dbCourseRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  const price = 3000;
  const response = paymentService.createPaymentIntent(price);
  return response;
};

export const getConfigU = (
  paymentService: ReturnType<PaymentServiceInterface>
) => paymentService.getConfig();

export const paymentGatewayU = async (price: number) => {
  const instance = new Razorpay({
    key_id: configKeys.RAZOR_PAY_ID,
    key_secret: configKeys.RAZOR_PAY_SECRET_KEY,
  });
  /**
   * @param options- Check docs
   * @see https://razorpay.com/docs/api/payments/recurring-payments/
   */
  const order = instance.orders.create({
    amount: price * 100,
    currency: "INR",
    receipt: "receipt#1",
    notes: {
      key1: "value3",
      key2: "value2",
    },
  });
  return order;
};

export const paymentDetailsU = async (
  paymentDbRepository: ReturnType<PaymentInterface>
) => {
  return await paymentDbRepository.getPaymentInfo();
};
