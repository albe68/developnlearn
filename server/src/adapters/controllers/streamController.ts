import { Request, Response, NextFunction } from "express";
import asyncHandler from "express-async-handler";
import { CloudServiceImpl } from "@src/frameworks/services/s3Sevice";
import { CloudServiceInterface } from "@src/app/services/s3CloudServiceInterface";
import { watchLessonU } from "../../app/useCases/course/watchLesson";

const streamController = (
  cloudServiceImpl: CloudServiceImpl,
  cloudServiceInterface: CloudServiceInterface
) => {
  const cloudRepository = cloudServiceInterface(cloudServiceImpl());
  const watchLesson = asyncHandler(async (req, res) => {
    const courseId = req.params.courseId;
    const lessonId = req.params.videoId;
    const fileKey = req.params.objectKey;
    const url = await watchLessonU(cloudRepository, fileKey);
    res.status(200).json({
      status: "success",
      data: url,
    });
  });

  return {
    watchLesson,
  };
};
export default streamController;
