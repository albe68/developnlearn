import { LessonDbInterface } from "@src/app/repositories/lessonDbRepository";
export const getLessonByCourseU = async (
  courseId: string,
  lessonDbRepository: ReturnType<LessonDbInterface>
) => {
 const course= await lessonDbRepository.getLessonByID(courseId);
 return course;
};
