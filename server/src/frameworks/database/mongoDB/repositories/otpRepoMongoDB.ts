import Otp from "../models/otp";

export const otpDbRepoMongoDb=()=>{
    const addOtp=async(data:number)=>{
        return await Otp.create(data);
    }

    return {
        addOtp
    }
}

export type OtpDbRepoMongoDb=typeof otpDbRepoMongoDb;
