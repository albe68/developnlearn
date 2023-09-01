import axios from "axios";
import api from "../../middlewares/interceptors";

// const baseURL = 'http://localhost:5000/';
// const axiosInstance=axios.create({baseURL})

// axiosInstance.interceptors.response.use(
//     (response)=>{
//         return response;
//     },
//     (error)=>{
//         return Promise.reject(error);
//     }
// )

export const viewCourseService = async (endpoint) => {
  try {
    const courses = await api.get(endpoint);
    console.log(courses, "check module");
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
    const singleCourse = await api.get(`${endpoint}/${courseId}`);
    console.log("s", singleCourse);
    return singleCourse;
  } catch (error) {
    console.error(error);
  }
};
