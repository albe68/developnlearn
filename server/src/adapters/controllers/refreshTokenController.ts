import { AuthServiceInterface } from "@src/app/services/authServiceInterface";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { AuthService, authService } from "@src/frameworks/services/authService";
import { RefreshTokenDbInterface } from "@src/app/repositories/refreshTokenDbRepository";
import { RefreshTokenRepositoryMongoDB } from "@src/frameworks/database/mongoDB/repositories/refreshTokenRepoMongoDB";
import { refreshTokenU } from "../../app/useCases/auth/refreshToken";
const refreshTokenController = (
  authServiceInterface: AuthServiceInterface,
  authServiceImpl: AuthService,
  refreshTokenDbRepository: RefreshTokenDbInterface,
  refreshTokenRepositoryImpl: RefreshTokenRepositoryMongoDB
) => {
  const dbRepositoryRefreshToken = refreshTokenDbRepository(
    refreshTokenRepositoryImpl()
  );
  const authService = authServiceInterface(authServiceImpl());

  const refreshToken = asyncHandler(async (req: Request, res: Response) => {
    const refreshToken = req.body.refreshToken;
    const response = await refreshTokenU(
      refreshToken,
      dbRepositoryRefreshToken,
      authService
    );
    res.status(200).json({
      status: "success",
      message: "access token generated successfully",
      accessToken: response,
    });
  });

  return { refreshToken };
};
export default refreshTokenController;
