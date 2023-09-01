import Otp from "../models/otp";
export const otpDbRepoMongoDb=()=>{
    const addOtp=async(data:number)=>{
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
