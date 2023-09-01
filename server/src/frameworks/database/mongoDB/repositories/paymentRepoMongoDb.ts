import Payment  from '../models/payment';
import {PaymentInfo} from '@src/types/payment'

export const paymentRepoMongoDb=()=>{
    const savePaymentInfo=async(paymentInfo:PaymentInfo)=>{
        const newPaymentInfo=new Payment(paymentInfo);
        const response=await newPaymentInfo.save();
        return response;
    }
    return{
        savePaymentInfo
    };
}

export type PaymentImplInterface=typeof paymentRepoMongoDb;