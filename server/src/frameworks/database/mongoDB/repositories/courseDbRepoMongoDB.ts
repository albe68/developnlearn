import mongoose from "mongoose";
import Course from "../models/course";
import Payment from "../models/payment";
import Lesson from "../models/lessons";
import {
  AddCourseDetailsInterface,
  SavedCourseDetailsInterface,
} from "@src/types/courseInterface";
import { AddLessonInterface } from "@src/types/LessonInterface";
export const courseRepositoryMongoDb = () => {
  const addCourse = async (courseDetails: AddCourseDetailsInterface) => {
    const newCourse = new Course(courseDetails);
    return await newCourse.save();
  };
  const allCourses = async () => {
    const courses: AddCourseDetailsInterface[] | null = await Course.find({});
    return courses;
  };

  const getCourseById = async (courseId: string) => {
    const course = await Course.findOne({ _id: courseId });
    return course;
  };
  const editCourse = async (
    courseId: string,
    updateDetails: SavedCourseDetailsInterface
  ) => {
    const editedDetails = await Course.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(courseId) },
      { ...updateDetails }
    );
    return editedDetails;
  };

  const deleteCourse = async (courseId: string) => {
    return await Course.findOneAndUpdate(
      { _id: courseId },
      { $set: { isDeleted: true } },
      { new: false }
    );
  };

  const enrollStudent = async (courseId: string, studentId: string) => {
    const response = await Course.updateOne(
      { _id: courseId },
      {
        $push: {
          studentsEnrolled: studentId,
        },
      }
    );
    return response;
  };

  const enrolledStudents = async (studentId: string) => {
    const enrolled_students = await Course.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(studentId),
        },
      },
      {
        $unwind: "$studentsEnrolled",
      },
      {
        $lookup: {
          from: "students",
          localField: "studentsEnrolled",
          foreignField: "_id",
          as: "studentDetails",
        },
      },
      {
        $project: {
          student: { $arrayElemAt: ["$studentDetails", 0] },
          courseName: "$title",
        },
      },
      {
        $group: {
          _id: "$student._id",
          course: { $first: "$courseName" },
          firstName: { $first: "$student.firstName" },
          lastName: { $first: "$student.lastName" },
          email: { $first: "$student.email" },
          mobile: { $first: "$student.mobile" },
          isBlocked: { $first: "$student.isBlocked" },
        },
      },
    ]);
    return enrolled_students;
  };

  const getCoursesByStudent = async (studentId:string) => {
    const courses = await Course.find({
      studentsEnrolled: {
        $in: [new mongoose.Types.ObjectId("64c8b0af3521dca7afbfdd0e")],
      },
    });
    return courses;
  };
  const viewPaymentDetails = async () => {
    const payment_details = await Payment.find({});
  };

  const filterCourses = async (query: string) => {
    console.log(query)
    const result = await Course.find({ tags: { $all: query } });
    console.log(result, "mongodb");
    return result;
  };

  const coursesTags = async () => {
    // const coursesTags=await Course.find({},'tags')
    const getTags = await Course.aggregate([
      { $unwind: "$tags" },
      {
        $group: {
          _id: null,
          uniqueArr: { $addToSet: "$tags" },
        },
      },
      {
        $project: {
          _id: 0,
          uniqueArr: 1,
        },
      },
    ]);
    const tags = getTags[0].uniqueArr;
    console.log("start".bg_white, getTags[0].uniqueArr, "end".bg_white);
    return tags;
  };

  const enrolledCoursesForStudent = async (studentId: string) => {
    const enrolledCourses = await Course.find({
      studentsEnrolled: { $in: [studentId] },
    });
    console.log(enrolledCourses, "enrolled");
    return enrolledCourses;
  };

  const reallocateCourses = async (courseId: string) => {
    return await Course.findOneAndUpdate(
      { _id: courseId },
      { $set: { isDeleted: false } },
      { new: false }
    );
  };

  const addLesson = async (
    lessonDetails: AddLessonInterface,
    courseId: string
  ) => {
    lessonDetails.courseId = courseId;
    const course_pay = new Lesson(lessonDetails);
    const { _id } = await course_pay.save();
    console.log(_id, "rep");
    return _id;
  };
  return {
    addCourse,
    allCourses,
    getCourseById,
    editCourse,
    deleteCourse,
    enrollStudent,
    viewPaymentDetails,
    enrolledStudents,
    getCoursesByStudent,
    filterCourses,
    coursesTags,
    enrolledCoursesForStudent,
    reallocateCourses,
    addLesson,
  };
};

export type CourseRepositoryMongoDbInterface = typeof courseRepositoryMongoDb;
