import {login,register} from  '../../services/auth/instructorAuthServices'

export const loginInstructor=(instructorData)=>{
return login('api/auth/instructor-login',instructorData)
}

export const registerInstructor=(instructorData)=>{
    return register('api/auth/instructor-register',instructorData)
    }