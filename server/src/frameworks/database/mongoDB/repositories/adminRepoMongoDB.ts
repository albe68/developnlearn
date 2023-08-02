import Admin from '../models/admin';
import { AdminSavedDbInterface } from '../../../../types/adminAuthInterface';
export const adminRepoMongoDb=()=>{
    const getAdminByEmailMongo=async (email:String)=>{
      try { 

        const admin: AdminSavedDbInterface | null = await Admin.findOne({ email });
         return admin;
        }
         catch(err){

            console.error('error fetching admin',err);
            throw err;
         }

    }
//solved an ambiquity as adminDBRepository had a same function
// name as adminRepoMongoDB ie,getAdminByEmail so changed adminRepoMongoDB's getAdminByEmail ---> getAdminByEmailMongo

    return{
        getAdminByEmailMongo
    };
}

export type AdminRepositoryMongoDb = typeof adminRepoMongoDb;