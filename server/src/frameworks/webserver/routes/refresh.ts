import express from "express";
import refreshTokenController from "../../../adapters/controllers/refreshTokenController";
import { authServiceInterface } from "../../../app/services/authServiceInterface";
import { authService } from "../../../frameworks/services/authService";
import { refreshTokenDbRepository } from "../../../app/repositories/refreshTokenDbRepository";
import { refreshTokenDbRepositoryMongoDB } from "../../../frameworks/database/mongoDB/repositories/refreshTokenRepoMongoDB";
const refreshRouter = () => {
  const router = express.Router();
  const controller = refreshTokenController(
    authServiceInterface,
    authService,
    refreshTokenDbRepository,
    refreshTokenDbRepositoryMongoDB
  );

  router.post("/refresh",controller.refreshToken);
  return router;
};

export default refreshRouter;
