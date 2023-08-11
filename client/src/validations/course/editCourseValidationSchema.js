import {object,string} from 'yup'

export const editCourseValidationSchema=object().shape({
    title:string().trim().required(" title is required"),
    duration:string().trim().required("duration is required"),
    level:string().trim().required("level is required"),
    tags:string().trim().required("tags is required"),
    description:string().trim().required("description is required"),
    requirements:string().trim().required("requirements is required"),
    price:string().trim().required("price is required"),


});
