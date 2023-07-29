import Instructor from '../../frameworks/database/mongoDB/models/instructor';
import {InstructorRepositoryMongoDB} from '../../frameworks/database/mongoDB/repositories/instructorDbRepoMongoDB'
import { InstructorInterface, SavedInstructorInterface } from '@src/types/instructorInterface'

export const instructorDbRepository=(repository:ReturnType<InstructorRepositoryMongoDB>)=>{
    const addInstructor=async (instructor:InstructorInterface)=>{
        await repository.addInstructor(instructor);
    }
    const getInstructorByEmail=async(email:string)=>{
        const instructor:SavedInstructorInterface | null =await Instructor.findOne({email});
        return instructor;
    }
  
    return{
        addInstructor,
        getInstructorByEmail,
        
    }
}

export type InstructorDbInterface=  typeof instructorDbRepository;