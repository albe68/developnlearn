    import { StudentInterface } from "@src/types/studentInterface";
import AppError from "../../../utils/appError";
import { StudentDbInterface } from "@src/app/repositories/studentDbRepository";

export const getAllStudentsU=async(
    studentRepository:ReturnType<StudentDbInterface>
)=>{
    const students:StudentInterface[]|null=await studentRepository.getAllStudents();
    return students;
}

export const blockStudentU=async(
    studentId:string,
    // reason:string,
    studentRepository:ReturnType<StudentDbInterface>
    )=>{
        if (!studentId){
            throw new AppError("student id is invalid",400);

    }
    // if(!reason){
    //     throw new AppError("reason is not provided ",400);
    // }

    const student=await studentRepository.getStudent(studentId);
    console.log(student,"hi")
    // if(student?.isBlocked){
    //     throw new AppError("Student is already Blocked",409);
    // } 
            //solve above error
    await studentRepository.blockStudent(studentId);
    
}

export const unBlockStudentU=async(studentId:string,studentRepository:ReturnType<StudentDbInterface>)=>{
    if(!studentId){
        throw new AppError('userId is invalid',400);

    }
    console.log("hihih",studentId)
    const student=await studentRepository.getStudent(studentId);
    console.log(student,"stud")
  
    await studentRepository.unBlockStudent(studentId);

    }