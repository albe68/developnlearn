import AppError from "../../../utils/appError";
import { AdminDbInterface } from "../../repositories/adminDbRepository";
import { AuthServiceInterface } from "@src/app/services/authServiceInterface";
import { AdminSavedDbInterface } from "../../../types/adminAuthInterface";
import { RefreshTokenDbInterface } from "@src/app/repositories/refreshTokenDbRepository";

export const adminLogin =async(
    email:string,
    password:string,
    adminRepository:ReturnType<AdminDbInterface>,
    refreshTokenRepository:ReturnType<RefreshTokenDbInterface>,
    authService:ReturnType<AuthServiceInterface>,
    
)=>{
    console.log("first",email,password,adminRepository)
    const admin: AdminSavedDbInterface | null=
     await adminRepository.getAdminByEmail(email);
    console.log("admin consoled",admin)

    if(!admin){
        throw new AppError('Admin email is wrong',401)
    }

    const isPasswordCorrect=await authService.comparePassword(password,admin.password);
    if(!isPasswordCorrect){
        throw new AppError('credentials are wrong',401)
    }

    const payload={
        Id:admin._id,
        email:admin.email,
        role:'admin'
    }
    await refreshTokenRepository.deleteRefreshToken(admin._id);
    const accessToken=authService.generateToken(payload);
    const refreshToken=authService.generateRefreshToken(payload);
    const expirationDate=authService.decodedTokenAndReturnExpireDate(refreshToken);
    await refreshTokenRepository.saveRefreshToken(
        admin._id,
        refreshToken,
        expirationDate
    );

    return{
        accessToken,
        refreshToken
    }

    

}

