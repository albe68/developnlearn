import END_POINTS from '../../../constants/endpoints';
import { getConfigService,createStripePaymentService,
      razorPaymentService,captureRZpService,
      enrollStudentService,getPaymentDetailsService }
 from '../../services/payment/paymentConfigService' 

export const paymentConfigService=()=>{
  return  getConfigService(END_POINTS.GET_CONFIG);
}

export const  createStripePayment=(courseId)=>{
    return createStripePaymentService(END_POINTS.PAYMENT,courseId)
}

export const razorPayment=(price)=>{
  const response= razorPaymentService(END_POINTS.RAZOR,price);
  return response;

};

export const capture_RZP=()=>{
  return captureRZpService(END_POINTS.RAZOR);

}

export const enrollStudent=(course,paymentInfo)=>{
  return enrollStudentService(END_POINTS.ENROLL,course,paymentInfo);
}

export const getPaymentDetails=()=>{
  return getPaymentDetailsService(END_POINTS.GET_PAYMENT_DETAILS);
}