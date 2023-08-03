import Instructor from '../models/instructor';
import mongoose from 'mongoose';
import{ InstructorInterface,SavedInstructorInterface} from '../../../../types/instructorInterface';

export const instructorDbRepoMongoDB =()=>{
   
        const addInstructor=async (instructor:InstructorInterface)=>{
            return await Instructor.create(instructor);
        
        }

        const getInstructorByEmail=async(email:string)=>{
        const instructor:SavedInstructorInterface|null=await Instructor.findOne({email});
        return instructor;
        }

        const getAllInstructors=async()=>{
            return await Instructor.find()
        }

        const acceptInstructorRequestMongo=async(instructorId:string)=>{
            return await Instructor.updateOne({_id:instructorId},{isVerified:true});
        }

        const declineInstructorRequest=async(instructorId:string)=>{
            const response= await Instructor.findOneAndUpdate({_id:instructorId},{isVerified:false});
            return response;
        }
  
    return {
        addInstructor,
        getInstructorByEmail,
        getAllInstructors,
        acceptInstructorRequestMongo,
        declineInstructorRequest
    
    };
};

export type InstructorRepositoryMongoDB =typeof instructorDbRepoMongoDB;