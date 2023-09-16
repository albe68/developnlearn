import {number, object,string,mixed} from 'yup'

export const addLessonValidationSchema=object().shape({
    lesson_name:string().trim().required(" title is required"),
    duration:number().required("duration is required"),
    description:string().trim().required("description is required"),
});
