import express from "express";
import courseController from "../../../adapters/controllers/courseController";
import { courseDbRepository } from "../../../app/repositories/courseDbRepository";
import { courseRepositoryMongoDb } from "../../../frameworks/database/mongoDB/repositories/courseDbRepoMongoDB";
import upload from "../middlewares/multer";
import {
  uploadSingleImage,
  uploadMultipleVideos,
} from "../middlewares/cloudinary";
import { paymentInterface } from "../../../app/repositories/paymentDbRepository";
import { paymentRepoMongoDb } from "../../../frameworks/database/mongoDB/repositories/paymentRepoMongoDb";
import jwtAuthMiddleware from "../middlewares/userAuth";
import { studentAuthorization } from "../middlewares/authorize";
const courseRouter = () => {
  const router = express.Router();
  const controller = courseController(
    courseDbRepository,
    courseRepositoryMongoDb,
    paymentInterface,
    paymentRepoMongoDb
  );

  router.post("/add-course", uploadMultipleVideos, controller.addCourse);

  router.get("/courses", jwtAuthMiddleware, controller.allCourses);

  router.get("/:courseId", controller.getIndividualCourse);

  router.patch("/edit-course/:courseId", controller.editCourse);
  router.delete("/remove-course/:courseId", controller.deleteCourse);
  router.post("/enroll-student/:courseId", controller.enrollStudent);
  router.get("/check", jwtAuthMiddleware, controller.getIndividualCourse);
  router.get("/cou/filte",controller.filterCourses);
  //complete get course for
  router.post("instructor/add-lessons-by-course/:courseId");
  router.get("instructor/get-lessons-by-course/:courseId");
  //
  router.get("/courses/view", controller.enrolledStudents);
  router.get("/courses/tags",controller.coursesTags);

  return router;
};

export default courseRouter;
