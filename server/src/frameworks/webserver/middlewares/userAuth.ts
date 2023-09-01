import { NextFunction, Response, Request } from "express";
import HttpStatusCode from "../../../constants/httpStatusCode";
import AppError from "../../../utils/appError";
import {  authService } from "../../../frameworks/services/authService";
import { JwtPayload } from "@src/types/common";
import { CustomRequest } from "@src/types/customRequest";
const jwtAuthMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
    let token: string | null='';
    
    if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  };
  if(!token){
    throw new AppError('Token not found',HttpStatusCode.UNAUTHORIZED);
  };
  try{
    const {payload,expired}=authService().verifyToken(token) as {
        payload:JwtPayload,
        expired:boolean
    }
    req.user=payload;
    next();    
  }
  catch(err){
    throw new AppError('Session is expired login in again',HttpStatusCode.FORBIDDEN)
  };

};

export default jwtAuthMiddleware;
