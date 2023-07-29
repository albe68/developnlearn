import AppError from "../../../utils/appError";
import { InstructorInterface, SavedInstructorInterface } from "@src/types/instructorInterface";
import { InstructorDbInterface } from "@src/app/repositories/instructorDbRepository";
import { AuthServiceInterface } from "@src/app/services/authServiceInterface";
import { RefreshTokenDbInterface } from "@src/app/repositories/refreshTokenDbRepository";

export const instructorRegister=async(
    instructor:InstructorInterface,
    instructorRepository:ReturnType<InstructorDbInterface>,
    authService:ReturnType<AuthServiceInterface>)=>{
        const {password}: {password:string}=instructor;
        console.log(instructor)
        instructor.email=instructor?.email.toLowerCase();
        const isEmailAlreadyRegistered=await instructorRepository.getInstructorByEmail(instructor.email);
        if(isEmailAlreadyRegistered){
            throw new AppError('instructor is already registered',401);
        }
        if(password){
            instructor.password=await authService.hashPassword(password);
        }
        const response=await instructorRepository.addInstructor(instructor);
        return response;
       
    }

export const instructorLogin=async(
email:string,
password:string,
instructorRepository:ReturnType<InstructorDbInterface>,
refreshTokenDbRepository:ReturnType<RefreshTokenDbInterface>,
authService:ReturnType<AuthServiceInterface>
)=>{
    const instructor:SavedInstructorInterface | null =
    await instructorRepository.getInstructorByEmail(email);
    console.log(instructor,"ins@")
    if(!instructor){
        throw new AppError("Instructor doesn't exist,please register",401);
    }
    if(!instructor.isVerified){
        throw new AppError("Instructor is not verified yet,please wait for verfication",401)
    }
     const isPasswordCorrect=await authService.comparePassword(
        password,instructor.password
     )
     if(!isPasswordCorrect){
        throw new AppError("Instructor credentials are wrong",401);
     } 
     const payload={
        Id:instructor._id,
        email:instructor.email,
        role:'instructor    ',
         }

         await refreshTokenDbRepository.deleteRefreshToken(instructor._id);
         const accessToken=await authService.generateToken(payload);
         const refreshToken=await authService.generateRefreshToken(payload);
         const expirationDate=await authService.decodedTokenAndReturnExpireDate(refreshToken);

         await refreshTokenDbRepository.saveRefreshToken(instructor._id,refreshToken,expirationDate);

         return {accessToken,refreshToken};
    


    }
