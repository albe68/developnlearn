import { AdminRepositoryMongoDb } from '../../frameworks/database/mongoDB/repositories/adminRepoMongoDB';

export const adminDbRepository=(
    repository: ReturnType<AdminRepositoryMongoDb>
    )=>{
       const getAdminByEmail=async(email:string)=>await repository.getAdminByEmailMongo(email);
       


      
        return{
            getAdminByEmail
            }
             
        
        
//solved an ambiquity as adminDBRepository had a same function
// name as adminRepoMongoDB ie,getAdminByEmail so changed adminRepoMongoDB's getAdminByEmail ---> getAdminByEmailMongo 
       
        
      
            
    };
    
    export type AdminDbInterface = typeof adminDbRepository;