import mongoose from "mongoose";
import Lessons from "../models/lessons";

export const lessonDbRepositoryMongoDb = () => {
  const getLessonByID = async (courseID: string) => {
    const course = await Lessons.findOne({ courseId: new mongoose.Types.ObjectId(courseID) });
    console.log(course)
    return course;
  };
  return {
    getLessonByID,
  };
};

export type LessonDbMongoInterface = typeof lessonDbRepositoryMongoDb;
