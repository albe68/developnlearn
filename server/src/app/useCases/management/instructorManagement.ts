import { InstructorDbInterface } from "@src/app/repositories/instructorDbRepository";
import { SendEmailService } from "@src/frameworks/services/sendEmailServices";


export const getAllInstructorsU=
async(instructorRepository:ReturnType<InstructorDbInterface>)=>
{
    const instructors=await instructorRepository.getAllInstructors();
    return instructors;
};

export const acceptInstructorRequestU=async(instructorRepository:ReturnType<InstructorDbInterface>,
    instructorId:string,
    emailService:ReturnType<SendEmailService>)=>
{
  const response=await instructorRepository.acceptInstructorRequest(instructorId);
  if(response){
    emailService.sendEmail(
        "fogavid413@mliok.com",
        "You have been verified,Cheers",
        "You are verified good to go"
    );
  }
  return response;

};

export const declineInstructorRequestU=
async(instructorRepository:ReturnType<InstructorDbInterface>,instructorId:string,emailService:ReturnType<SendEmailService>)=>
{
  const response=  await instructorRepository.declineInstructorRequest(instructorId);
    if(response){
      emailService.sendEmail(
          "fogavid413@mliok.com",
          "Rejected your request for Instructor Role",
          "You are verified good to go"
      );
    }
    return response;
};

export const getInstructorRequestsU=async(instructorRepository:ReturnType<InstructorDbInterface>)=>{
  const instructors= instructorRepository.getInstructorRequests();
  return instructors;
};

export const getAllRejectedInstructorsU=async(instructorRepository:ReturnType<InstructorDbInterface>)=>{
  const rejectedInstructors=await instructorRepository.getAllRejectedInstructors();
  return rejectedInstructors;
};