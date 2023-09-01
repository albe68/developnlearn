import axios from "axios";
import COMMON_CONSTANTS from "../../constants/common";
import { refreshTokenApi } from "../endpoints/auth/token-refresh";
const baseURL = "http://localhost:5000/";

const api = axios.create({ baseURL });
api.interceptors.request.use(
  (config) => {
    const tokenString = localStorage.getItem("accessToken");

    if (tokenString) {
      const token = JSON.parse(tokenString);
      console.log(token, "checked at interceptor");
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error, "no token");
  }
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const orginalRequest = error.config;

    if (error?.response?.status === 401 && !orginalRequest._retry) {
      orginalRequest._retry = true;

      const tokenString = localStorage.getItem("refreshToken");
      let token;
      if (tokenString) {
        token = JSON.parse(tokenString);
      }
      try {
        console.log("token is been refresh ")
        const accessToken = await refreshTokenApi(token.refreshToken);
        localStorage.setItem(
          "accessToken",
          JSON.stringify({
            accessToken: accessToken,
          })
        );

        return api(orginalRequest);
      } catch (error) {
        throw new CustomApiError("Something went wrong", error);
      }
    }
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const { data, status } = error.response;
    if ((status = 400)) {
      throw new CustomApiError("Bad request", data);
    } else if ((status = 401)) {
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

export default api;
