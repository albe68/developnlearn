import mongoose  from "mongoose";
import RefreshToken from '../models/token';

export const refreshTokenDbRepositoryMongoDB=()=>{
    const saveRefreshToken= async(
        userId:string,
        token:string,
        expiresAt:number
    )=>{
        const refreshToken= new RefreshToken({
            userId,token,expiresAt
        });
        await refreshToken.save();
    };

    const deleteRefreshToken=async (id:string)=>{
        await RefreshToken.deleteOne({userId: new mongoose.Types.ObjectId(id)});    
}

const findRefreshToken= async (refreshToken:string)=>{
    const token= await RefreshToken.findOne({token:refreshToken});
    return token;
}

return{
    saveRefreshToken,
    deleteRefreshToken,
    findRefreshToken,
    
};
};

export type RefreshTokenRepositoryMongoDB = typeof refreshTokenDbRepositoryMongoDB;