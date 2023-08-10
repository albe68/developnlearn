import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
// import configKeys from '@src/config';
import { JwtPayload } from 'jsonwebtoken';
import random from 'random'
export const authService=()=>{
    const hashPassword=async (password:string)=>{
        const salt=await bcrypt.genSalt(10);
        const hashedPassword= await bcrypt.hash(password,salt);
        return hashedPassword;
    };

    const comparePassword=async (password:string,hashedPassword:string)=>{
       
        
        return bcrypt.compare(password,hashedPassword);

    }

    const generateToken=(payload:JwtPayload)=>{
        const token=jwt.sign({payload},"this_is_secret",{expiresIn:'3h'})
        return token;
    }

    const generateRefreshToken=(payload:JwtPayload)=>{
        const token=jwt.sign({payload},"refresh_token",{expiresIn:'7d'});
        return token;
    }

    const verifyToken=(token:string)=>{
        return jwt.verify(token,"this_is_secret");
    }

    const decodeToken=(token:string)=>{
        const decodedToken:jwt.JwtPayload | null=jwt.decode(token) as jwt.JwtPayload | null;
        return decodedToken;
    }

    const decodedTokenAndReturnExpireDate=(token:string): number =>{
        const decodedToken:any =jwt.decode(token);
        let expirationTimeStamp:number;
        if(decodedToken&&decodedToken.app){
            expirationTimeStamp=decodedToken.exp * 1000;
        }
        else{
            expirationTimeStamp=0;
        }
        return expirationTimeStamp;
    }

    // const otpGenerate=async ()=> random.int(0, 10000); 


    return {
        comparePassword,
        generateToken,
        generateRefreshToken,
        verifyToken,
        hashPassword,
        decodedTokenAndReturnExpireDate,
        decodeToken,
        // otpGenerate
        
    }
}

export type AuthService = typeof authService;

export type AuthServiceReturn = ReturnType<AuthService>;