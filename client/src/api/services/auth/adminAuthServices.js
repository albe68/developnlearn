import api from "../../middlewares/test";
export const login = async (endpoint, data) => {
  try {
    const response = await api.post(`${endpoint}`, data);
    return response;
  } catch (err) {
    console.log(err);
  }
};
