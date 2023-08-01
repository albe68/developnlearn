import { InstructorDbInterface } from "@src/app/repositories/instructorDbRepository";


export const getAllInstructorsU=
async(instructorRepository:ReturnType<InstructorDbInterface>)=>
{
    const instructors=await instructorRepository.getAllInstructors();
    return instructors;
}