// import api from "../../middlewares/protected-interceptor";
import api from "../../middlewares/test";
export const refreshTokenService = async (endpoint, refreshToken) => {
    try {
      console.log(refreshToken,'check')
      const response = await api.post(`${endpoint}`,{refreshToken:`Bearer ${refreshToken}`});
      return response;
    } catch (error) {
      return Promise.reject(error);
    }
  };