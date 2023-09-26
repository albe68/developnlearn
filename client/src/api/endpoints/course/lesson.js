import END_POINTS from "../../../constants/endpoints";
import {
  addLessonService,
  watchLessonService,
  listLessonsService
} from "../../services/course/lesson-service";

export const addLesson = (lesson, courseId) => {
  console.log("🚀 ~ file: lesson.js:5 ~ addLesson ~ formData:", lesson);

  return addLessonService(END_POINTS.ADD_LESSON, lesson, courseId);
};

export const watchLesson = (lesson, courseId) => {
  console.log("🚀 ~ file: lesson.js:5 ~ addLesson ~ formData:", lesson);

  return watchLessonService(END_POINTS.WATCH_LESSON, lesson, courseId);
};

export const listLessons = (lesson, courseId) => {
  console.log("🚀 ~ file: lesson.js:5 ~ listLessonsService ~ formData:", lesson);

  return listLessonsService(END_POINTS.LIST_LESSON, lesson, courseId);
};
