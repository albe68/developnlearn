import { StudentRepositoryMongoDB } from '../../frameworks/database/mongoDB/repositories/studentRepoMongoDB';
import { StudentRegisterInterface } from '@src/types/studentRegisterInterface';
import { StudentUpdateInfo } from '@src/types/studentInterface';

export const studentDbRepository=(
    repository: ReturnType <StudentRepositoryMongoDB>
)=>{
    const addStudent=async (student :StudentRegisterInterface)=>
    await  repository.addStudent(student);

    const getStudentByEmail =async (email:string)=>
    await repository.getStudentByEmail(email);

    const getAllStudents=async ()=> await repository.getAllStudents();

    const getStudent=async (id:string)=>await repository.getStudent(id);

    const blockStudent=async (id:string) => await repository.blockStudent(id);

    const unBlockStudent=async (id:string)=> await repository.unBlockStudent(id)
    
    const viewProfile=async(id:string)=> await repository.viewProfile(id);

    const editProfile=async(id:string,edit_data:StudentUpdateInfo)=>await repository.editProfile(id,edit_data);

    const getEnrolledStudents=async(studentId:string)=> await repository.getEnrolledStudents(studentId);
    return {
        addStudent,
        getStudentByEmail,
        getAllStudents,
        getStudent,
        blockStudent,
        unBlockStudent,
        viewProfile,
        editProfile,
        getEnrolledStudents
        
    }
}

export type StudentDbInterface= typeof studentDbRepository;  

