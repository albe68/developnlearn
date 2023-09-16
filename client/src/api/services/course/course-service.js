// import axiosInstance from "../../middlewares/test";
// import api from "../../middlewares/protected-interceptor";
import axiosInstance from "../../middlewares/interceptors";
import api from "../../middlewares/test"
export const viewCourseService = async (endpoint) => {
  try {

    const courses = await axiosInstance.get(endpoint);
    return courses.data;
  } catch (err) {
    console.log(err);
  }
};

export const enrollStudentService = async (endpoint, courseId, paymentInfo) => {
  try {
    await api.post(`${endpoint}/${courseId}`, paymentInfo);
  } catch (error) {
    console.error(error);
  }
};

export const IndividualCourseService = async (
  endpoint,
  courseId,
  paymentInfo
) => {
  try {
    console.log("dhhh")
    const singleCourse = await api.get(`${endpoint}/${courseId}`);
    return singleCourse;
  } catch (error) {
    console.error(error);
  }
};

export const filterService = async (endpoint, filterQuery) => {
  try {
    const filteredCourses = await api.get(`${endpoint}?filter=${filterQuery}`);
    return filteredCourses;
  } catch (error) {
    console.error(error);
  }
};

export const enrolledCourseService = async (endpoint, studentId) => {
  try {
    const enrolledCourses = await api.get(`${endpoint}`, { studentId });
    console.log("s", enrolledCourses);
    return enrolledCourses.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const tagsService = async (endpoint) => {
  try {
    const tags = await api.get(`${endpoint}`);
    return tags.data.data;
  } catch (error) {
    console.error(error);
  }
};

export const removeCourseService = async (endpoint, courseId) => {
  try {
    await api.delete(`${endpoint}${courseId}`);
    console.log("course restored");
    return ;
  } catch (error) {
    console.error(error);
  }
};

export const restoreCourseService = async (endpoint, courseId) => {
  try {
    await api.patch(`${endpoint}${courseId}`);
    console.log("course restored");
    return ;
  } catch (error) {
    console.error(error);
  }
};
