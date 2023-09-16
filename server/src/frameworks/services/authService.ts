import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { JwtPayload } from "jsonwebtoken";
import crypto from "crypto";
import configKeys from "../../config";
import { colors } from "colors.ts";
import { IOtp } from "../../types/otpInterface";
export const authService = () => {
  const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  };

  const comparePassword = async (password: string, hashedPassword: string) => {
    return bcrypt.compare(password, hashedPassword);
  };

  const generateToken = (payload: JwtPayload) => {
    const token = jwt.sign({ payload }, configKeys.JWT_SECRET, {
      expiresIn: "1m",
    });
    return token;
  };

  const generateRefreshToken = (payload: JwtPayload) => {
    const token = jwt.sign({ payload }, configKeys.REFRESH_JWT_SECRET, {
      expiresIn: "1m",
    });
    return token;
  };

  const verifyToken = (token: string) => {
    return jwt.verify(token, configKeys.JWT_SECRET);
  };

  const decodeToken = (token: string) => {
    const decodedToken: jwt.JwtPayload | null = jwt.decode(
      token
    ) as jwt.JwtPayload | null;
    return decodedToken;
  };

  const decodedTokenAndReturnExpireDate = (token: string): number => {
    const decodedToken: any = jwt.decode(token);
    let expirationTimeStamp: number;
    if (decodedToken && decodedToken.exp) {
      expirationTimeStamp = decodedToken.exp * 1000;
    } else {
      expirationTimeStamp = 0;
    }
    return expirationTimeStamp;
  };

  const otpGenerate = (): IOtp => {
    const min = 1000;
    const max = 9999;
    const randomBytes = crypto.randomBytes(4); // Generate 4 random bytes
    const randomValue = randomBytes.readUInt32BE(0); // Convert bytes to integer
    const otp = min + (randomValue % (max - min + 1)); // Scale and shift the value
    const ObjOtp = {
      otp: otp,
      expiresIn: 2,
    };
    return ObjOtp;
  };

  return {
    comparePassword,
    generateToken,
    generateRefreshToken,
    verifyToken,
    hashPassword,
    decodedTokenAndReturnExpireDate,
    decodeToken,
    otpGenerate,
  };
};

export type AuthService = typeof authService;

export type AuthServiceReturn = ReturnType<AuthService>;
