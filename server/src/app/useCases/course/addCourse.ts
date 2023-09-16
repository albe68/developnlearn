import { CourseDbRepositoryInterface } from "@src/app/repositories/courseDbRepository";
import { AddCourseDetailsInterface } from "@src/types/courseInterface";
import { uploadSingleImage } from "@src/frameworks/webserver/middlewares/cloudinary";
import AppError from "../../../utils/appError";
export const AddCourse = async (
  files: Express.Multer.File[],
  courseDetails: AddCourseDetailsInterface,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>,
  instructorId: string
) => {
  if (!courseDetails) {
    throw new AppError("Enter Course details", 404);
  }
  if (files) {
    const uploadPromises = files.map(async (file) => {
        courseDetails.videos=file.path;
    
    });
  }
  courseDbRepository.addCourse(courseDetails);
};

export const allCoursesU = async (
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>
) => {
  return courseDbRepository.allCourses();
};
