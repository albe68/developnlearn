import mongoose, { Schema,model } from "mongoose";

interface IOtp{
    otp?:number;
}

export const otpSchema=new Schema({
    otp:{
        type:Number,
    }
});

const Otp=model("Otps",otpSchema,"otp");
export default Otp;