import express from "express";
import dotenv from "dotenv";
dotenv.config();
import streamController from "../../../adapters/controllers/streamController";
import jwtAuthMiddleware from "../middlewares/userAuth";
import { s3Service } from "../../../frameworks/services/s3Sevice";
import { CloudServiceRepo } from "../../../app/services/s3CloudServiceInterface";
const courseRouter = () => {
  const router = express.Router();
  const controller = streamController(s3Service, CloudServiceRepo);

  router.get(
    "/stream-video/:videoId",
    jwtAuthMiddleware,
    controller.watchLesson
  );
};
export default courseRouter;
