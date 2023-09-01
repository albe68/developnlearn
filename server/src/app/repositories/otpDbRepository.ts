import { OtpDbRepoMongoDb } from "@src/frameworks/database/mongoDB/repositories/otpRepoMongoDB"


export const otpDbRepository=(repository:ReturnType<OtpDbRepoMongoDb>)=>{
    const addOtp=async(data:number)=>repository.addOtp(data);

    const checkDb=async(data:string)=>repository.checkDb(data);
    return{
        addOtp,
        checkDb
    }
}

export type OtpDbRepository=typeof otpDbRepository;