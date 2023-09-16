import api from "../../middlewares/test";

export const refreshTokenService = async (endpoint, refreshToken) => {
  
  const response = await api.post(`${endpoint}`, {
    refreshToken: `Bearer${refreshToken}`,
  });
  console.log(response, "high quality");
  return response.data.accessToken;
};
