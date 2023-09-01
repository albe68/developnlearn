import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { CourseDbRepositoryInterface } from "@src/app/repositories/courseDbRepository";
import { CourseRepositoryMongoDbInterface } from "@src/frameworks/database/mongoDB/repositories/courseDbRepoMongoDB";
import { AddCourse, allCoursesU } from "../../app/useCases/course/addCourse";
import { enrolledStudentsU } from "../../app/useCases/course/enrollCourse";
import { AddCourseDetailsInterface } from "@src/types/courseInterface";
import {
  deleteCourseU,
  getIndividualCourseU,
  paymentDetailsU,
} from "../../app/useCases/course/courseDetails";
import { editCourseU } from "../../app/useCases/course/courseDetails";
import { enrollStudentU } from "../../app/useCases/course/enrollCourse";
import { PaymentInterface } from "@src/app/repositories/paymentDbRepository";
import { PaymentImplInterface } from "@src/frameworks/database/mongoDB/repositories/paymentRepoMongoDb";
const courseController = (
  courseDbRepository: CourseDbRepositoryInterface,
  courseDbRepositoryImpl: CourseRepositoryMongoDbInterface,
  paymentDbRepository: PaymentInterface,
  paymentDbRepositoryImpl: PaymentImplInterface
) => {
  const dbRepositoryCourse = courseDbRepository(courseDbRepositoryImpl());
  const dbRepositoryPayment = paymentDbRepository(paymentDbRepositoryImpl());
  const addCourse = asyncHandler(async (req: Request, res: Response) => {
    const course: AddCourseDetailsInterface = req.body;
    const files: Express.Multer.File[] = req.files as Express.Multer.File[];
    const response = await AddCourse(files, course, dbRepositoryCourse);

    res.status(200).json({
      status: "success",
      message: "course added successfully",
      data: response,
    });
  });

  const allCourses = asyncHandler(async (req: Request, res: Response) => {
    const courses = await allCoursesU(dbRepositoryCourse);

    res.status(200).json({
      status: "success",
      message: "courses listed successfully",
      data: courses,
    });
  });

  const getIndividualCourse = asyncHandler(
    async (req: Request, res: Response) => {
      const courseId = req.params.courseId;
      const single_course = await getIndividualCourseU(
        courseId,
        dbRepositoryCourse
      );
      res.status(200).json({
        status: "success",
        message: "individual course retrieved succesfully",
        data: single_course,
      });
    }
  );

  const editCourse = asyncHandler(async (req: Request, res: Response) => {
    const courseId = req.params.courseId;
    const updateInfo = req.body;

    const edited_courses = await editCourseU(
      courseId,
      dbRepositoryCourse,
      updateInfo
    );
    res.status(200).json({
      status: "success",
      message: "edited a course successfully",
      data: edited_courses,
    });
  });
  const deleteCourse = asyncHandler(async (req: Request, res: Response) => {
    const courseId = req.params.courseId;
    await deleteCourseU(courseId, dbRepositoryCourse);
    res.status(200).json({
      status: "success",
      message: "course is successfullt removed",
    });
  });

  const enrollStudent = asyncHandler(async (req: Request, res: Response) => {
    const { paymentInfo } = req.body;
    const { courseId }: { courseId?: string } = req.params;
    const courseIdValue: string = courseId ?? "";
    // const { Id } : {Id?:string}=req.user || {};

    // const studentId:string=Id ?? '';
    await enrollStudentU(
      courseIdValue,
      paymentInfo,
      // Id,
      dbRepositoryPayment,
      dbRepositoryCourse
    );
    res.status(200).json({
      success: "success",
      message: "students is been enrolled",
      data: null,
    });
  });

  const paymentDetails = () => {
    asyncHandler(async (req, res) => {
      const paymentDetails = await paymentDetailsU(dbRepositoryCourse);
      res.status(200).json({
        status: "success",
        message: "payment details retrieved successfully",
        data: paymentDetails,
      });
    });
  };

  const enrolledStudents = asyncHandler(async (req, res) => {
    const studentId: string = req.params.studentId;

    const enrolledStudents = await enrolledStudentsU(dbRepositoryCourse);
    res.status(200).json({
      status: "success",
      message: "successfully retrived students",
      data: enrolledStudents,
    });
  });
  return {
    addCourse,
    allCourses,
    getIndividualCourse,
    editCourse,
    deleteCourse,
    enrollStudent,
    paymentDetails,
    enrolledStudents,
  };
};

export default courseController;
