import { AdminRepositoryMongoDb } from '../../frameworks/database/mongoDB/repositories/adminRepoMongoDB';

export const adminDbRepository=(
    repository: ReturnType<AdminRepositoryMongoDb>
    )=>{
       
        const getAdminByEmail=async(email:string)=>await repository.getAdminByEmail(email);
            
             return{
                getAdminByEmail
                    };
       
        
      
            
    };
    
    export type AdminDbInterface = typeof adminDbRepository;