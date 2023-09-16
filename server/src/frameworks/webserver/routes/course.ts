import express from "express";
import dotenv from "dotenv";
dotenv.config();
import courseController from "../../../adapters/controllers/courseController";
import { courseDbRepository } from "../../../app/repositories/courseDbRepository";
import { courseRepositoryMongoDb } from "../../../frameworks/database/mongoDB/repositories/courseDbRepoMongoDB";
import upload from "../middlewares/multer";
import {
  uploadSingleImage,
  uploadMultipleVideos,
} from "../../services/cloudinaryService";
import { paymentInterface } from "../../../app/repositories/paymentDbRepository";
import { paymentRepoMongoDb } from "../../../frameworks/database/mongoDB/repositories/paymentRepoMongoDb";
import jwtAuthMiddleware from "../middlewares/userAuth";
import { studentAuthorization } from "../middlewares/authorize";
import { s3Service } from "../../../frameworks/services/s3Sevice";
import { CloudServiceRepo } from "../../../app/services/s3CloudServiceInterface";
import { lessonDbRepositoryMongoDb } from "../../../frameworks/database/mongoDB/repositories/lessonRepoMongoDB";
import { lessonDbRepository } from "../../../app/repositories/lessonDbRepository";

const courseRouter = () => {
  const router = express.Router();
  const controller = courseController(
    courseDbRepository,
    courseRepositoryMongoDb,
    paymentInterface,
    paymentRepoMongoDb,
    s3Service,
    CloudServiceRepo,
    lessonDbRepository,
    lessonDbRepositoryMongoDb
  );

  router.post("/add-course", uploadMultipleVideos, controller.addCourse);

  router.get("/courses", controller.allCourses);

  router.get("/:courseId", controller.getIndividualCourse);

  router.patch("/edit-course/:courseId", controller.editCourse);
  router.delete("/remove-course/:courseId", controller.deleteCourse);
  router.post("/enroll-student/:courseId",jwtAuthMiddleware, controller.enrollStudent);
  router.get("/check", controller.getIndividualCourse);
  router.get("/cou/filte", controller.filterCourses);
  //complete get course for
  router.post(
    "/instructor/add-lessons-by-course/:courseId",
    upload.array("media"),
    controller.addLesson
  );
  router.get("instructor/get-lessons-by-course/:courseId");

  router.get(
    "/courses/view-enrolled-students/:studentId",
    controller.enrolledStudents
  );
  router.get("/courses/tags", controller.coursesTags);
  router.get("/courses/enrolled-courses", controller.enrolledCoursesForStudent);
  router.patch("/restored-course/:courseId", controller.reallocateCourse);
  router.get(
    "/:courseId/watch-lesson",
    jwtAuthMiddleware,
    controller.watchLesson
  );
  router.get("/:courseId/lessons", controller.getLessonByCourse);
  return router;
};

export default courseRouter;
