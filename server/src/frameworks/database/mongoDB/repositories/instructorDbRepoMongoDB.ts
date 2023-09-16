import Instructor from "../models/instructor";
import{ InstructorInterface,SavedInstructorInterface} from "../../../../types/instructorInterface";

export const instructorDbRepoMongoDB =()=>{
   
        const addInstructor=async (instructor:InstructorInterface)=>{
            console.log(instructor,"console init");
            //manipulating the instructor object
            instructor.isRejected=false;
            return await Instructor.create(instructor);
        
        };

        const getInstructorByEmail=async(email:string)=>{
        const instructor:SavedInstructorInterface|null=await Instructor.findOne({email});
        return instructor;
        };

        const getAllInstructors=async()=>{
            return await Instructor.find();
        };

        const acceptInstructorRequestMongo=async(instructorId:string)=>{
            return await Instructor.updateOne({_id:instructorId},{isVerified:true});
        };

        const declineInstructorRequestMongo=async(instructorId:string)=>{
           return await Instructor.findOneAndUpdate({_id:instructorId},{$set:{isVerified:false,isRejected:true}},{new:false});
        };

        const getInstructorRequests=async()=>{
        const instructors= await Instructor.find({isVerified:false,isRejected:false});
        return instructors;
        };
        const getAllRejectedInstructors=async()=>{
            const rejected=await Instructor.find({isRejected:true});
            return rejected;
        };
    return {
        addInstructor,
        getInstructorByEmail,
        getAllInstructors,
        acceptInstructorRequestMongo,
        declineInstructorRequestMongo,
        getInstructorRequests,
        getAllRejectedInstructors
    
    };
};

export type InstructorRepositoryMongoDB =typeof instructorDbRepoMongoDB;