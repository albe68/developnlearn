// import axiosInstance from "../../middlewares/test";
// import api from "../../middlewares/protected-interceptor";
import axiosInstance from "../../middlewares/interceptors";
import api from "../../middlewares/test";

export const addLessonService = async (endpoint, lesson, courseId) => {
  try {
    console.log(lesson, "lola");
    const response = await axiosInstance.post(`${endpoint}${courseId}`, lesson);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const watchLessonService = async (endpoint, lesson, courseId) => {
  try {
    console.log(lesson, "lola");
    const response = await axiosInstance.get(`${endpoint}${courseId}`, lesson);
    return response;
  } catch (err) {
    console.log(err);
  }
};
