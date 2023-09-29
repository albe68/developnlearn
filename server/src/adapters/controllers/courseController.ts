import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { CourseDbRepositoryInterface } from "@src/app/repositories/courseDbRepository";
import { CourseRepositoryMongoDbInterface } from "@src/frameworks/database/mongoDB/repositories/courseDbRepoMongoDB";
import { AddCourse, allCoursesU } from "../../app/useCases/course/addCourse";
import { addLessonU } from "../../app/useCases/course/addLesson";
import {
  enrolledStudentsU,
  filterCoursesU,
  enrollStudentU,
} from "../../app/useCases/course/enrollCourse";
import { AddCourseDetailsInterface } from "@src/types/courseInterface";
import {
  deleteCourseU,
  getIndividualCourseU,
  paymentDetailsU,
  reallocateCourseU,
  editCourseU,
  coursesTagsU,
  enrolledCoursesU,
} from "../../app/useCases/course/courseDetails";
import { PaymentInterface } from "@src/app/repositories/paymentDbRepository";
import { PaymentImplInterface } from "@src/frameworks/database/mongoDB/repositories/paymentRepoMongoDb";
import { CustomRequest } from "@src/types/customRequest";
import { CloudServiceImpl } from "@src/frameworks/services/s3Sevice";
import { CloudServiceInterface } from "@src/app/services/s3CloudServiceInterface";
import { watchLessonU } from "../../app/useCases/course/watchLesson";
import { AddLessonInterface } from "@src/types/LessonInterface";
import { getLessonByCourseU } from "../../app/useCases/course/getLesson";
import { LessonDbInterface } from "@src/app/repositories/lessonDbRepository";
import { LessonDbMongoInterface } from "@src/frameworks/database/mongoDB/repositories/lessonRepoMongoDB";
const courseController = (
  courseDbRepository: CourseDbRepositoryInterface,
  courseDbRepositoryImpl: CourseRepositoryMongoDbInterface,
  paymentDbRepository: PaymentInterface,
  paymentDbRepositoryImpl: PaymentImplInterface,
  cloudServiceImpl: CloudServiceImpl,
  cloudServiceInterface: CloudServiceInterface,
  lessonDbRepository: LessonDbInterface,
  lessonDbRepositoryImpl: LessonDbMongoInterface
) => {
  const dbRepositoryCourse = courseDbRepository(courseDbRepositoryImpl());
  const dbRepositoryPayment = paymentDbRepository(paymentDbRepositoryImpl());
  const cloudRepository = cloudServiceInterface(cloudServiceImpl());
  const dbRepositoryLesson = lessonDbRepository(lessonDbRepositoryImpl());

  const addCourse = asyncHandler(async (req: CustomRequest, res: Response) => {
    const course: AddCourseDetailsInterface = req.body;
    const files: Express.Multer.File[] = req.files as Express.Multer.File[];
    const { Id }: { Id?: string } = req.user || {};
    const studentId: string = Id ?? "";

    course.instructorId = "64f6a19edd75dcb7508dac3c";

    const response = await AddCourse(
      files,
      course,
      dbRepositoryCourse,
      studentId
    );

    res.status(200).json({
      status: "success",
      message: "course added successfully",
      data: response,
    });
  });

  const allCourses = asyncHandler(async (req: CustomRequest, res: Response) => {
    const courses = await allCoursesU(dbRepositoryCourse);

    res.status(200).json({
      status: "success",
      message: "courses listed successfully",
      data: courses,
    });
  });

  const getIndividualCourse = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      const studentId: string | undefined = req.user?.Id;
      console.log("🚀 ~ file: courseController.ts:82 ~ studentId:", req.user);
      const courseId = req.params.courseId;
      const single_course = await getIndividualCourseU(
        courseId,
        dbRepositoryCourse,
        studentId
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

  const enrollStudent = asyncHandler(
    async (req: CustomRequest, res: Response) => {
      const { paymentInfo } = req.body;

      const { courseId }: { courseId?: string } = req.params;
      const courseIdValue: string = courseId ?? "";
      const { Id }: { Id?: string } = req.user || {};
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
    }
  );

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

    const enrolledStudents = await enrolledStudentsU(
      dbRepositoryCourse,
      studentId
    );
    res.status(200).json({
      status: "success",
      message: "successfully  retrived students enrolled for your course ",
      data: enrolledStudents,
    });
  });

  const filterCourses = asyncHandler(async (req, res) => {
    const keyword: any = req.query.filter; //change the type to query's type
    console.log(req.query);
    const filteredCourses = await filterCoursesU(dbRepositoryCourse, keyword);
    res.status(200).json({
      status: "success",
      message: "filtered courses successfully",
      data: filteredCourses,
    });
  });

  const coursesTags = asyncHandler(async (req, res) => {
    const tags = await coursesTagsU(dbRepositoryCourse);
    res.status(200).json({
      status: "success",
      message: "tags retrieved successfully",
      data: tags,
    });
  });

  const enrolledCoursesForStudent = asyncHandler(async (req, res) => {
    const studentId = "64c8b0af3521dca7afbfdd0e";
    const enrolledCourses = await enrolledCoursesU(
      dbRepositoryCourse,
      studentId
    );
    res.status(200).json({
      status: "success",
      message: "enrolled courses for a student is retrived",
      data: enrolledCourses,
    });
  });

  const reallocateCourse = asyncHandler(async (req: Request, res: Response) => {
    const courseId = req.params.courseId;
    await reallocateCourseU(courseId, dbRepositoryCourse);
    res.status(200).json({
      status: "success",
      message: "course is successfully restored",
    });
  });

  const addLesson = asyncHandler(async (req: Request, res: Response) => {
    console.log("first");
    const courseId = "64ccf7b1221b3305caa73f40";
    console.log(
      "🚀 ~ file: courseController.ts:205 ~ addLesson ~ req.body:",
      req.body
    );
    const lesson_deails: AddLessonInterface = req.body;
    console.log(
      "🚀 ~ file: courseController.ts:206 ~ addLesson ~ lesson_deails:",
      lesson_deails
    );
    const files = req.files as Express.Multer.File[];

    await addLessonU(
      courseId,
      files,
      lesson_deails,
      dbRepositoryCourse,
      cloudRepository
    );
    res.status(200).json({
      status: "success",
      message: "successfully added lessons",
    });
  });

  const watchLesson = asyncHandler(async (req, res) => {
    const courseId = req.params.courseId;
    const lessonId = req.params.lessonId;
    const fileKey = req.params.objectKey;
    const url = await watchLessonU(cloudRepository, fileKey);
    res.status(200).json({
      status: "success",
      data: url,
    });
  });

  const getLessonByCourse = asyncHandler(async (req, res) => {
    const courseId = req.params.courseId;
    console.log(courseId);
    const course = await getLessonByCourseU(courseId, dbRepositoryLesson);
    console.log(course, "@controller");
    res.status(200).json({
      status: "success",
      message: "courses retrvied by courseId",
      data: course,
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
    filterCourses,
    coursesTags,
    enrolledCoursesForStudent,
    reallocateCourse,
    addLesson,
    watchLesson,
    getLessonByCourse,
  };
};

export default courseController;
