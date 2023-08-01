
import END_POINTS from "../../../constants/endpoints"
import refreshTokenService from "../../services/auth/refreshTokenServices"


export const refreshTokenApi=(refreshToken)=>{return refreshTokenService(END_POINTS.REFRESH_TOKEN,refreshToken)};