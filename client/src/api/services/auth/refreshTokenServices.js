import { refreshTokenApi } from "../../endpoints/auth/refreshToken";
import COMMON_CONSTANTS from "../../../constants/common"

export const refreshTokenService=async(
    endpoint,refreshToken
)=>{
    const response=await api.post(`${COMMON_CONSTANTS}${endpoint}`,
    {
        refreshToken:`Bearer${refreshToken}`
    })
}
  