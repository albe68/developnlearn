import {
  CourseDbRepositoryInterface,
  courseDbRepository,
} from "@src/app/repositories/courseDbRepository";
import { AddCourseDetailsInterface } from "@src/types/courseInterface";
import { SavedCourseDetailsInterface } from "@src/types/courseInterface";
import mongoose from "mongoose";
import AppError from "../../../utils/appError";
export const getIndividualCourseU = async (
  courseId: string,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>,
  studentId: string |undefined
) => {

  const course  = await courseDbRepository.getCourseById(courseId);
  if(
  course?.studentsEnrolled?.includes(new mongoose.Types.ObjectId(studentId))){
    
    throw new AppError("student already registered to this course",422);
  }else{
  const course = courseDbRepository.getIndividualCourse(courseId);
 return course;

  }
 
};

export const editCourseU = async (
  courseId: string,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>,
  updateInfo: SavedCourseDetailsInterface
) => {
  return courseDbRepository.editCourse(courseId, updateInfo);
};

export const deleteCourseU = async (
  courseId: string,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  return courseDbRepository.deleteCourse(courseId);
};

export const paymentDetailsU = async (
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  return courseDbRepository.viewPaymentDetails();
};

export const coursesTagsU = async (
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  return courseDbRepository.coursesTags();
};

export const enrolledCoursesU = async (
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>,

  studentId: string
) => {
  return courseDbRepository.enrolledCoursesForStudent(studentId);
};

export const reallocateCourseU = async (
  courseId: string,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  return courseDbRepository.reallocateCourses(courseId);
};
