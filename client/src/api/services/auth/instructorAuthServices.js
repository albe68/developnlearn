// import api from "../../middlewares/protected-interceptor";
import api from "../../middlewares/test"
export const login = async (endpoint, data) => {
  try {
    const response = await api.post(`${endpoint}`, data);
    console.log(response, "cj");

    return response;
  } catch (error) {
    console.log(error, "hi");
  }
};

export const register = async (endpoint, data) => {
  try {
    const response = await api.post(`${endpoint}`, data);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};
