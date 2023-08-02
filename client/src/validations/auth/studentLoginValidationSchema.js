import {object,string} from 'yup'

export const studentLoginValidationSchema=object().shape({
    email:string().trim().required(" email is required"),
    password:string().trim().required("Password is required"),
})
