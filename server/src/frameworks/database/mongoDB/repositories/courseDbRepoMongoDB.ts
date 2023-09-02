import mongoose from "mongoose";
import Course from "../models/course";
import Payment from "../models/payment";
import {
  AddCourseDetailsInterface,
  SavedCourseDetailsInterface,
} from "@src/types/courseInterface";

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

  const enrolledStudents = async () => {
    const enrolled_students = await Course.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId("64d2658868387e584584959b"),
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

  const getCoursesByStudent = async () => {
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

  const filterCourses = async (keyword: string) => {
    let query = [keyword];
    const result = await Course.find({ tags: { $all: query } });
    console.log(result,'mongodb')
    return result;
  };

  const coursesTags=async()=>{
    const coursesTags=await Course.find({},'tags')
    return coursesTags;
  }
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
    coursesTags
  };
};

export type CourseRepositoryMongoDbInterface = typeof courseRepositoryMongoDb;
