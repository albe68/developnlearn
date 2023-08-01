import {object,string,ref} from "yup"
export const studentRegisterValidationSchema=object().shape({
    firstName:string().trim().required("First Name is required"),
    lastName:string().trim().required("Last Name is required"),
    email:string().email("Invalid email").trim().required("Email is required"),
    password:string().required("Password is required"),
    mobile:string().trim().required("Mobile Number is required"),


})