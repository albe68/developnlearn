import axios from "axios";
import api from "../../middlewares/test";
import axiosInstance from "../../middlewares/interceptors";
// const baseURL = "http://localhost:5000/";

// const axiosInstance = axios.create({ baseURL });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     console.log(error, "here");
//   }
// );

export const getConfigService = async (endpoint) => {
  try {
    const response = await axiosInstance.get(`${endpoint}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const createStripePaymentService = async (endpoint, courseId) => {
  try {
    const response = await axiosInstance.post(`${endpoint}`, {
      courseId,
    });
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const razorPaymentService = async (endpoint, amount) => {
  try {
    const response = await api.post(`${endpoint}`, {
      amount,
    });
    console.log("checked");
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const captureRZpService = async (endpoint) => {
  try {
    const response = await axiosInstance.post(`${endpoint}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

//error in backend
export const enrollStudentService = async (endpoint, courseId, paymentInfo) => {
  try {
    const response = await axiosInstance.post(`${endpoint}/${courseId}`, {
      paymentInfo,
    });
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};

export const getPaymentDetailsService = async (endpoint) => {
  try {
    const response = await api.get(`${endpoint}`);
    return response.data;
  } catch (err) {
    return Promise.reject(err);
  }
};
