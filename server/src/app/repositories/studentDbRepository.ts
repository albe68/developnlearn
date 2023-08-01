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

    const getStudent=async (id:string)=>await repository.getStudent(id);

    const blockStudent=async (id:string) => await repository.blockStudent(id);

    const unBlockStudent=async (id:string)=> await repository.unBlockStudent(id)
    
    return {
        addStudent,
        getStudentByEmail,
        getAllStudents,
        getStudent,
        blockStudent,
        unBlockStudent
        
    }
}

export type StudentDbInterface= typeof studentDbRepository;  

