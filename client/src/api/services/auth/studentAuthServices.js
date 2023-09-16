// import api from "../../middlewares/protected-interceptor";
import axiosInstance from "../../middlewares/interceptors";
export const login = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(`${endpoint}`, data);
    return response;
  } catch (error) {
    console.log(error.response.data.message,'service')
    return Promise.reject(error.response.data.message)
  }
};

export const register = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(`${endpoint}`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};
