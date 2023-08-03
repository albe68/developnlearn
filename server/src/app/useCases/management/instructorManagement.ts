import { InstructorDbInterface } from "@src/app/repositories/instructorDbRepository";


export const getAllInstructorsU=
async(instructorRepository:ReturnType<InstructorDbInterface>)=>
{
    const instructors=await instructorRepository.getAllInstructors();
    return instructors;
}

export const acceptInstructorRequestU=
async(instructorRepository:ReturnType<InstructorDbInterface>,instructorId:string)=>
{
    await instructorRepository.acceptInstructorRequest(instructorId);
}

export const declineInstructorRequestU=
async(instructorRepository:ReturnType<InstructorDbInterface>,instructorId:string)=>
{
    await instructorRepository.declineInstructorRequest(instructorId);
}