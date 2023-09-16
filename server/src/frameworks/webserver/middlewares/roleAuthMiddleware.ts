import { CustomRequest } from "@src/types/customRequest";
import { NextFunction, Response } from "express";
import AppError from "../../../utils/appError";
import HttpStatusCode from "../../../constants/httpStatusCode";

export const studentRoleAuthMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const role = req.user?.role;
  if (role === `student`) {
    next();
  } else {
    throw new AppError(`Unauthorized Role`, HttpStatusCode.UNAUTHORIZED);
  }
};

export const adminRoleAuthMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const role = req.user?.role;
  if (role === `admin`) {
    next();
  } else {
    throw new AppError(`Unauthorized Role`, HttpStatusCode.UNAUTHORIZED);
  }
};

export const instructorRoleAuthMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const role = req.user?.role;
  if (role === `instructor`) {
    next();
  } else {
    throw new AppError(`Unauthorized Role`, HttpStatusCode.UNAUTHORIZED);
  }
};
