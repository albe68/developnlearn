import { AuthServiceReturn } from '../../frameworks/services/authService';
import {JwtPayload} from '../../types/common'

export const authServiceInterface=(service:AuthServiceReturn)=>{
const hashPassword= (password:string)=> service.hashPassword(password);

const comparePassword =(password:string,hashedPassword:string)=>service.comparePassword(password,hashedPassword);

const verifyPassword=(token:string)=> service.verifyToken(token);

const  generateToken= (payload:JwtPayload) => service.generateToken(payload);

const generateRefreshToken=(payload:JwtPayload)=>service.generateRefreshToken(payload);

const decodedTokenAndReturnExpireDate=(token:string)=>service.decodedTokenAndReturnExpireDate(token);

const decodeToken=(token:string)=> service.decodeToken(token);

const otpGenerate=()=> service.otpGenerate();




return {
    hashPassword,
    comparePassword,
    verifyPassword,
    generateToken,
    generateRefreshToken,
    decodedTokenAndReturnExpireDate,
    decodeToken,
    otpGenerate

    }



}

export type AuthServiceInterface= typeof authServiceInterface;