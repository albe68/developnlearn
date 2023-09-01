import Instructor from '../../frameworks/database/mongoDB/models/instructor';
import { InstructorRepositoryMongoDB } from '../../frameworks/database/mongoDB/repositories/instructorDbRepoMongoDB'
import { InstructorInterface, SavedInstructorInterface } from './../../types/instructorInterface'

export const instructorDbRepository=(repository:ReturnType<InstructorRepositoryMongoDB>)=>{

    const addInstructor=async (instructor:InstructorInterface)=>await repository.addInstructor(instructor);
    
    const getInstructorByEmail=async(email:string)=>await repository.getInstructorByEmail(email);

    const getAllInstructors=async()=>await repository.getAllInstructors();

    const acceptInstructorRequest=async(instructorId:string)=> await repository.acceptInstructorRequestMongo(instructorId);

    const declineInstructorRequest=async(instructorId:string)=> await repository.declineInstructorRequestMongo(instructorId);

    const getInstructorRequests=async()=> await repository.getInstructorRequests();

    const getAllRejectedInstructors=async()=> await repository.getAllRejectedInstructors();
  
    return{
        addInstructor,
        getInstructorByEmail,
        getAllInstructors,
        acceptInstructorRequest,
        declineInstructorRequest,
        getInstructorRequests,
        getAllRejectedInstructors

        
    }
}

export type InstructorDbInterface=  typeof instructorDbRepository;