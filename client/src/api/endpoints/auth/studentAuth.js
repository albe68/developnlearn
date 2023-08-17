import {login,register} from '../../services/auth/studentAuthServices'
import  END_POINTS from '../../../constants/endpoints'
export const loginStudent=(email,password)=>{
    const student={email,password}
    return login(END_POINTS.STUDENT_LOGIN,student)
}

export const registerStudent=(studentData)=>{
    return register(END_POINTS.STUDENT_REGISTER,studentData)
}

export const otpVerify=(studentData)=>{
    return otpVerify(END_POINTS.OTP_VERIFY,studentData);
}