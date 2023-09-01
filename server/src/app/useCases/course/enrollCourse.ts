import { CourseDbRepositoryInterface, courseDbRepository } from "../../repositories/courseDbRepository";
import { PaymentInterface } from "../../repositories/paymentDbRepository";
import AppError from "../../../utils/appError";

export const enrollStudentU = async (
  courseId: string,
  // studentId:string,
  paymentInfo: any,
  paymentDbRepository: ReturnType<PaymentInterface>,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  const {razorpay_payment_id,
    razorpay_order_id,razorpay_signature}=paymentInfo
  const studentId: string = "64c8b0af3521dca7afbfdd0e";
  if (!courseId) {
    throw new AppError("please provide course details", 404);
  }
  if (!studentId) {
    throw new AppError("please provide student details", 404);
  }
    const course=await courseDbRepository.getCourseById(courseId);
    //check if course is paid or not
    const payment={
      courseId:courseId,
      studentId:studentId,
      paymentId:razorpay_payment_id,
      amount:paymentInfo.amount/100,
      currency:paymentInfo.currency,
      payment_method:paymentInfo.payment_method

    };
    
    await Promise.all([
      courseDbRepository.enrollStudent(courseId,studentId),
      paymentDbRepository.savePayment(payment)
    ]);
    
    };


    export const enrolledStudentsU=async(
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>

    )=>{
      return courseDbRepository.getEnrolledStudentss();
    }

   
