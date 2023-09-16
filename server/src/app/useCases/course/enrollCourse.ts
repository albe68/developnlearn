import {
  CourseDbRepositoryInterface,
  courseDbRepository,
} from "../../repositories/courseDbRepository";
import { PaymentInterface } from "../../repositories/paymentDbRepository";
import AppError from "../../../utils/appError";
import mongoose from "mongoose";
export const enrollStudentU = async (
  courseId: string,
  // studentId:string,
  paymentInfo: any,
  paymentDbRepository: ReturnType<PaymentInterface>,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
    paymentInfo;
  const studentId: string = "64c9ff714c5bbbb1938d4c02";
  console.log(studentId,"studentId".bg_blue);
  if (!courseId) {
    throw new AppError("please provide course details", 404);
  }
  if (!studentId) {
    throw new AppError("please provide student details", 404);
  }
  
  const course  = await courseDbRepository.getCourseById(courseId);
  if(
  course?.studentsEnrolled?.includes(new mongoose.Types.ObjectId(studentId))){
    throw new AppError("student already registered to this course",422);
  }

  //validate student already registered


  
  //check if course is paid or not
  const payment = {
    courseId: courseId,
    studentId: studentId,
    paymentId: razorpay_payment_id,
    amount: paymentInfo.amount / 100,
    currency: paymentInfo.currency,
    payment_method: paymentInfo.payment_method,
  };
  console.log("🚀 ~ file: enrollCourse.ts:39 ~ payment:", payment);
  await Promise.all([
    courseDbRepository.enrollStudent(courseId, studentId),
    paymentDbRepository.savePayment(payment),
  ]);
  return;

};

export const enrolledStudentsU = async (
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>,
  studentId:string
) => {
  return courseDbRepository.getEnrolledStudentss(studentId);
};

export const filterCoursesU = async (
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>,
  keyword:string
) => {
  return courseDbRepository.filterCourses(keyword);
};
