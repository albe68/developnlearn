import Instructor from '../models/instructor';
import mongoose from 'mongoose';
import{ InstructorInterface,SavedInstructorInterface} from '../../../../types/instructorInterface';

export const instructorDbRepoMongoDB =()=>{
   
        const addInstructor=async (instructor:InstructorInterface)=>{
            return await Instructor.create(instructor);
        
        }

        const getInstructorByEmail=async(email:string)=>{
        const instructor:SavedInstructorInterface[]|null=await Instructor.findOne({email});
        return instructor;
        }

  
    return {addInstructor,getInstructorByEmail};
};

export type InstructorRepositoryMongoDB =typeof instructorDbRepoMongoDB;