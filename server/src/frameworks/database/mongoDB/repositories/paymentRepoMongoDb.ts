import Payment  from "../models/payment";
import {PaymentInfo} from "@src/types/payment";

export const paymentRepoMongoDb=()=>{
    const savePaymentInfo=async(paymentInfo:PaymentInfo)=>{
        const newPaymentInfo=new Payment(paymentInfo);
        const response=await newPaymentInfo.save();
        return response;
    };
    const getPaymentInfo=async()=>{
        const paymentDetail=await Payment.find();
        console.log(paymentDetail,"payment details retrieved");
        return paymentDetail;

    };
    return{
        savePaymentInfo,
        getPaymentInfo
    };
};

export type PaymentImplInterface=typeof paymentRepoMongoDb;