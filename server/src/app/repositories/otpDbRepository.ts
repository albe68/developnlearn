import { OtpDbRepoMongoDb } from "@src/frameworks/database/mongoDB/repositories/otpRepoMongoDB"
export const otpDbRepository=(repository:ReturnType<OtpDbRepoMongoDb>)=>{
    const addOtp=async(data:number)=>repository.addOtp(data)
    return{
        addOtp
    }
}

export type OtpDbRepository=typeof otpDbRepository;