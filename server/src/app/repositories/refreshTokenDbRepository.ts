import {RefreshTokenRepositoryMongoDB} from '../../frameworks/database/mongoDB/repositories/refreshTokenRepoMongoDB';

export const refreshTokenDbRepository=( 
    repository: ReturnType<RefreshTokenRepositoryMongoDB>

)=>{
    const  saveRefreshToken=async(
        userId:string,
        token:string,
        expriesAt:number
    )=>await repository.saveRefreshToken(userId,token,expriesAt)

    const deleteRefreshToken=async (id:string)=>
    await repository.deleteRefreshToken(id);

    const findRefreshToken= async (refreshToken:string)=>
    await repository.findRefreshToken(refreshToken);

    return{
        saveRefreshToken,
        deleteRefreshToken,
        findRefreshToken
    }
}

export type RefreshTokenDbInterface =typeof refreshTokenDbRepository