import {object,string} from "yup"
export const instructorLoginValidationSchema=object().shape({
    email:string().trim().required("First Name is required"),
    password:string().trim().required("Password is required"),

})