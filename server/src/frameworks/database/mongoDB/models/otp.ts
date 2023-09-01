import mongoose, { Schema,model } from "mongoose";

interface IOtp{
    otp?:number;
}

export const otpSchema=new Schema <IOtp>({
    otp:{
       type: Number
    }
});

const Otp=model<IOtp>("Otp",otpSchema,"otps");
export default Otp;