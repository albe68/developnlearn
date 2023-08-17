import {object,string,ref, number} from "yup"
export const otpValidationSchema=object().shape({
    otp1:number().typeError("Invalid digit").required("Fill this field"),
    otp2:number().typeError("Invalid digit").required("Fill this field"),
    otp3:number().typeError("Invalid digit").required("Fill this field"),
    otp4:number().typeError("Invalid digit").required("Fill this field"),

  })
