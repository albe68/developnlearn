import Otp from "../models/otp";
import {IOtp} from "../../../../types/otpInterface"
export const otpDbRepoMongoDb=()=>{
    const addOtp=async(data:IOtp)=>{
         await new Otp({ otp: data }).save();

    };

    const checkDb=async(data:string)=>{
       const response=  await Otp.findOne({otp:data});
        return response;
    };
   
    return {
        addOtp,
        checkDb
    };
};

export type OtpDbRepoMongoDb=typeof otpDbRepoMongoDb;
