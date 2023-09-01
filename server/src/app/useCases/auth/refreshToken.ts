import HttpStatusCode from "../../../constants/httpStatusCode";
import AppError from "../../../utils/appError";
import { AuthServiceInterface } from "@src/app/services/authServiceInterface";
import { RefreshTokenDbInterface } from "@src/app/repositories/refreshTokenDbRepository";

export const refreshTokenU = async (
  refreshToken: string,
  refreshDbRepository: ReturnType<RefreshTokenDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  if (!refreshToken) {
    throw new AppError("Refresh Token Not found", HttpStatusCode.NOT_FOUND);
  }
  const exsistingToken = await refreshDbRepository.findRefreshToken(
    refreshToken
  );

  if (!exsistingToken) {
    throw new AppError(
      "Refresh Token Doesnt Exist",
      HttpStatusCode.UNAUTHORIZED
    );
  }
  const expirationDate = new Date(exsistingToken.expiresAt);
  if (new Date() > expirationDate) {
    throw new AppError(
      "Refresh Token has expired",
      HttpStatusCode.UNAUTHORIZED
    );
  }
  const decoded = authService.decodeToken(exsistingToken.token);
  const payload = {
    Id: "",
    email: "",
    role: "",
  };
  if (decoded) {
    (payload.Id = decoded?.payload?.Id),
      (payload.email = decoded?.payload?.email),
      (payload.role = decoded?.payload?.role);
  } else {
    throw new AppError(
      "Error! Server Token not decoded",
      HttpStatusCode.INTERNAL_SERVER_ERROR
    );
  }
  const accessToken = authService.generateToken(payload);
  return accessToken;
};
