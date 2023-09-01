import END_POINTS from '../../../constants/endpoints';
import { getConfigService,createStripePaymentService,
      razorPaymentService,captureRZpService,
      enrollStudentService }
 from '../../services/payment/paymentConfigService' 

export const paymentConfigService=()=>{
  return  getConfigService(END_POINTS.GET_CONFIG);
}

export const  createStripePayment=(courseId)=>{
    return createStripePaymentService(END_POINTS.PAYMENT,courseId)
}

export const razorPayment=()=>{
  console.log("ch")
  const response= razorPaymentService(END_POINTS.RAZOR,30);
  return response;

};

export const capture_RZP=()=>{
  return captureRZpService(END_POINTS.RAZOR);

}

export const enrollStudent=(courseId,paymentInfo)=>{
  return enrollStudentService(END_POINTS.ENROLL,courseId,paymentInfo);
}