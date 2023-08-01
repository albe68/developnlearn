import Admin from '../models/admin';
import { AdminSavedDbInterface } from '../../../../types/adminAuthInterface';
export const adminRepoMongoDb=()=>{
    const getAdminByEmail=async (email:String)=>{
        const admin: AdminSavedDbInterface | null = await Admin.findOne({ email });
         return admin;

    }

    return{
        getAdminByEmail
    };
}

export type AdminRepositoryMongoDb = typeof adminRepoMongoDb;