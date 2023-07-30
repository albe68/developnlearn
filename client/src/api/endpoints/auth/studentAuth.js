import {login,register} from '../../services/auth/studentAuthServices'

export const loginStudent=(email,password)=>{
    const student={email,password}
    console.log(student,"into one object");
    return login('api/auth/student-login',student)
}

export const registerStudent=(studentData)=>{
    console.log(studentData,"into one object");
    return register('api/auth/student-register',studentData)
}