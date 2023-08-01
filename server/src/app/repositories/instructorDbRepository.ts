import Instructor from '../../frameworks/database/mongoDB/models/instructor';
import {InstructorRepositoryMongoDB} from '../../frameworks/database/mongoDB/repositories/instructorDbRepoMongoDB'
import { InstructorInterface, SavedInstructorInterface } from './../../types/instructorInterface'

export const instructorDbRepository=(repository:ReturnType<InstructorRepositoryMongoDB>)=>{

    const addInstructor=async (instructor:InstructorInterface)=>await repository.addInstructor(instructor);
    
    const getInstructorByEmail=async(email:string)=>await repository.getInstructorByEmail(email);

    const getAllInstructors=async()=>await repository.getAllInstructors();


  
    return{
        addInstructor,
        getInstructorByEmail,
        getAllInstructors
        
    }
}

export type InstructorDbInterface=  typeof instructorDbRepository;