import { CourseDbRepositoryInterface } from "@src/app/repositories/courseDbRepository";
import { CloudServiceInterface } from "@src/app/services/s3CloudServiceInterface";
import { AddLessonInterface } from "@src/types/LessonInterface";
export const addLessonU = async (
  courseId: string,
  media: Express.Multer.File[],
  lesson_deails: AddLessonInterface,
  courseDbRepository: ReturnType<CourseDbRepositoryInterface>,
  cloudRepository: ReturnType<CloudServiceInterface>
) => {
  console.log("🚀 ~ file: addLesson.ts:14 ~ files:", media);

  if (media) {
    lesson_deails.medias = await Promise.all(
      media.map(async (files) => await cloudRepository.addObject(files))
    );
  }

  const lessonId = await courseDbRepository.addLessons(lesson_deails, courseId);
};
