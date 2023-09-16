import axios from "axios";
import COMMON_CONSTANTS from "../../constants/common";
// import { refreshTokenApi } from "../endpoints/auth/token-refresh";
const baseURL = "http://localhost:5000/";
import CustomApiError from "../../utils/CustomApiError";
const axiosInstance = axios.create({ baseURL });

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    if (status === 400) {
      throw new CustomApiError("Bad request", data);
    } else if (status === 401) {
      throw new CustomApiError("Unauthorized", data);
    } else if (status === 409) {
      throw new CustomApiError("Not Found", data);
    } else if (status === 409) {
      throw new CustomApiError("Conflict", data);
    } else {
      console.log("Error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
