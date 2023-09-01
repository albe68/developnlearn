// import HttpStatusCode from "@src/constants/httpStatusCode";
import AppError from "../../../utils/appError";
import { StudentDbInterface } from "@src/app/repositories/studentDbRepository";
import { AuthServiceInterface } from "../../services/authServiceInterface";

import { StudentRegisterInterface } from "@src/types/studentRegisterInterface";
import { RefreshTokenDbInterface } from "../../repositories/refreshTokenDbRepository";
import { StudentInterface } from "@src/types/studentInterface";
import refreshToken from "@src/frameworks/database/mongoDB/models/token";
import { OtpDbRepository } from "@src/app/repositories/otpDbRepository";
import { SendEmailService } from "@src/frameworks/services/sendEmailServices";
import { authService } from "@src/frameworks/services/authService";

export const studentRegister = async (
  student: StudentRegisterInterface,
  studentRepository: ReturnType<StudentDbInterface>,
  refreshTokenRepository: ReturnType<RefreshTokenDbInterface>,
  authService: ReturnType<AuthServiceInterface>
  // emailService:ReturnType<SendEmailService>,
) => {
  student.email = student?.email.toLowerCase();
  student.password = student?.password.trim();
  const isEmailAlreadyRegistered = await studentRepository.getStudentByEmail(
    student.email
  );

  if (isEmailAlreadyRegistered) {
    throw new AppError("User with same email already exsists..!", 401);
  }

  if (student.password == "") {
    throw new AppError("Please provide a valid password", 401);
  }
  if (student.password) {
    student.password = await authService.hashPassword(student.password);
  }

  const { _id: studentId, email } = await studentRepository.addStudent(student);
  const payload = {
    Id: studentId,
    email,
    role: "student",
  };
  const accessToken = authService.generateToken(payload);
  const refreshToken = authService.generateRefreshToken(payload);
  const expirationDate =authService.decodedTokenAndReturnExpireDate(refreshToken);
  await refreshTokenRepository.saveRefreshToken(
    studentId,
    refreshToken,
    expirationDate
  );
 
  return { accessToken, refreshToken };
};

export const studentLogin = async (
  email: string,
  password: string,
  studentRepository: ReturnType<StudentDbInterface>,
  refreshTokenRepository: ReturnType<RefreshTokenDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {
  const student: StudentInterface | null =
    await studentRepository.getStudentByEmail(email);

  if (!student) {
    throw new AppError("this user doesn't exsist", 404);
  };
  const isPasswordCorrect = await authService.comparePassword(
    password,
    student.password
  );

  if (!isPasswordCorrect) {
    throw new AppError("password is incorrect", 401);
  };

  const payload = {
    Id: student._id,
    email: student.email,
    role: "student",
  };
  await refreshTokenRepository.deleteRefreshToken(student._id); //deleting refresh token
  const accessToken = authService.generateToken(payload); //geneating access token
  const refreshToken = authService.generateRefreshToken(payload); //generating refresh token
  const expirationDate =authService.decodedTokenAndReturnExpireDate(refreshToken); //decode token and return expiry date

  await refreshTokenRepository.saveRefreshToken(
    student._id,
    refreshToken,
    expirationDate
  ); //sending this info to the user

  return { accessToken, refreshToken };
};

export const studentLogout = async (
  studentRepository: ReturnType<StudentDbInterface>,
  refreshTokenRepository: ReturnType<RefreshTokenDbInterface>,
  authService: ReturnType<AuthServiceInterface>
) => {

};

export const emailVerify = async (
  number: string,
  otpDbRepository: ReturnType<OtpDbRepository>,
  authService: ReturnType<AuthServiceInterface>
) => {
  const otp = authService.otpGenerate();
  try {
    await otpDbRepository.addOtp(otp);
  } catch (error) {
    console.error(error)
  }

  const isValid = await otpDbRepository.checkDb(number);
};
