import {number, object,string} from 'yup'

export const addCourseValidationSchema=object().shape({
    title:string().trim().required(" title is required"),
    duration:number().required("duration is required"),
    level:string().trim().required("level is required"),
    description:string().trim().required("description is required"),
    requirements:string().trim().required("requirements is required"),
    price:number().required("price is required"),


});
