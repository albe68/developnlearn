import mongoose from "mongoose";
import Course from "../models/course";
import { AddCourseDetailsInterface } from "@src/types/courseInterface";
export const courseRepositoryMongoDb=()=>{
    const addCourse=async(courseDetails:AddCourseDetailsInterface)=>{
        const newCourse=new Course(courseDetails);
        return await newCourse.save();
    }
    const allCourses=async()=>{
      const courses:AddCourseDetailsInterface[]|null= await  Course.find({});
         return courses;
    }
    return{
        addCourse,
        allCourses
    }
}

export type CourseRepositoryMongoDbInterface=typeof courseRepositoryMongoDb;