import { Request, Response, NextFunction } from "express";
import AppError from "@src/utils/appError";

const ErrorHandlingMiddleware = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
    console.log(
        `error status: `+`${err.status}`.bg_yellow,
        `error status code: `+`${err.statusCode}`.bg_red
    );
  if (err.statusCode === 404) {
    res
      .status(err.statusCode)
      .json({ errors: err.status, message: err.message });
  } else {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
};

export default ErrorHandlingMiddleware;
