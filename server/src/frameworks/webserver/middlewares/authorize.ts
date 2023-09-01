import { CustomRequest } from "@src/types/customRequest";
import AppError from "../../../utils/appError";
import { NextFunction,Response } from "express";
import HttpStatusCode from "../../../constants/httpStatusCode";

export const studentAuthorization = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  if (req?.user?.role === "student") {next();}
  else {
    throw new AppError(
      "User can only access here",
      HttpStatusCode.UNAUTHORIZED
    );
  }
};

