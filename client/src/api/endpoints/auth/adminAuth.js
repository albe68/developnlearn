import {login} from '../../services/auth/adminAuthServices'

export const adminLogin=(adminData)=>{
    return login('api/auth/admin/admin-login',adminData)
}
