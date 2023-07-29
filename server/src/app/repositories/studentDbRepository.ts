import { StudentRepositoryMongoDB } from '../../frameworks/database/mongoDB/repositories/studentRepoMongoDB';
import { StudentRegisterInterface } from '@src/types/studentRegisterInterface';
// import { studentUpdateInfo } from '@src/types/studentInterface';

export const studentDbRepository=(
    repository: ReturnType <StudentRepositoryMongoDB>
)=>{
    const addStudent=async (student :StudentRegisterInterface)=>
    await  repository.addStudent(student);

    const getStudentByEmail =async (email:string)=>
    await repository.getStudentByEmail(email);

    const getAllStudents=async ()=> await repository.getAllStudents();
    
    return {
        addStudent,
        getStudentByEmail,
        getAllStudents
        
    }
}

export type StudentDbInterface= typeof studentDbRepository;  

