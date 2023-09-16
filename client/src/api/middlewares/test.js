import axios from "axios";
import CustomApiError from "../../utils/CustomApiError";
const URL = "http://localhost:5000/";
const api = axios.create({ baseURL: URL });
import { refreshTokenApi } from "../endpoints/auth/refreshToken";

api.interceptors.request.use(
  (config) => {
    const tokenString = localStorage.getItem("accessToken");

    if (tokenString) {
      const token = JSON.parse(tokenString);
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
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
        //if accessToken expires we sent the refresh token in client to the server
        /**
         * @param accessToken if accessToken exprires we sent the refresh token to the authencation server
         * @returns  the authenticated server returns a access token && new refreshToken (optional)
         **/

        const accessToken = await refreshTokenApi(token);

        localStorage.setItem(
          "accessToken",
          JSON.stringify({
            accessToken: accessToken,
          })
        );

        return api(orginalRequest);
      } catch (error) {
        console.error(error);
        return Promise.reject(error);
      }
    }
    if (error?.response?.status === 403) {
      window.dispatchEvent(new Event("sessionExpired"));
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
    }
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    if (error.response) {
      const { data, status } = error.response;

      if (status === 400) {
        throw new CustomApiError("Bad request", data);
      } else if (status === 401) {
        throw new CustomApiError("Unauthorized", data);
      } else if (status === 404) {
        throw new CustomApiError("Not Found", data);
      } else if (status === 409) {
        throw new CustomApiError("Conflict", data);
      } else {
        throw new CustomApiError(`Request failed with status ${status}`, data);
      }
    } else if (error.request) {
      throw new CustomApiError(`No response recieved`, error.request);
    } else {
      console.log(`Wanna learn new error check interceptors middleware?`);
    }

    return Promise.reject(error);
  }
);

export default api;
