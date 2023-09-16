import mongoose, { Schema, model } from "mongoose";
import {IOtp} from "../../../../types/otpInterface"
// export interface IOtp {
//   otp?: number;
//   expiresIn?: number;
// }

export const otpSchema = new Schema<IOtp>({
  otp: {
    type: Number,
  },
  expiresIn: {
    type: Number,
  },
});

const Otp = model<IOtp>("Otp", otpSchema, "otps");
export default Otp;
