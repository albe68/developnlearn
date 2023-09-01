import COMMON_CONSTANTS from '../../../constants/common'
import api from "../../middlewares/protected-interceptor";



// const baseURL = 'http://localhost:5000/';
// const axiosInstance = axios.create({ baseURL });

// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export const refreshTokenService = async (endpoint, refreshToken) => {
    try {
      const response = await api.post(`${endpoint}`,
       {
        refreshToken:`Bearer ${refreshToken}`
       }
      );
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };