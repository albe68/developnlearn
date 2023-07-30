import {login} from  '../../services/auth/instructorAuthServices'

export const loginInstructor=(instructorData)=>{
    console.log(instructorData,"haha")
return login('api/auth/instructor-login',instructorData)
}