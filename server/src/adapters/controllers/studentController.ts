// import { StudentDbInterface } from '../../app/repositories/studentDbRepository'
// import { StudentRepositoryMongoDB } from "@src/frameworks/database/mongoDB/repositories/studentRepoMongoDB"
// import { AuthServiceInterface } from "@src/app/services/authServiceInterface"
// import { AuthService } from "@src/frameworks/services/authService"
// import { studentDbRepository } from "@src/app/repositories/studentDbRepository"
// import asyncHandler from "express-async-handler"
// import { Request,Response } from "express"
// // import {getAllStudentsU} from '../../app/useCases/management/studentManagement'
// // import {blockStudentU} from '../../app/useCases/management/studentManagement'

// const studentController=(
//     authServiceInterface:AuthServiceInterface,
//     authServiceImpl:AuthService,
//     studentDbRepository:StudentDbInterface,
//     studentDbRepositoryImpl:StudentRepositoryMongoDB
// )=>{
//     const dbRepositoryStudent=studentDbRepository(studentDbRepositoryImpl());
//     const authService=authServiceInterface(authServiceImpl());

//     const getAllStudents=asyncHandler(async(req:Request,res:Response)=>{
//         const students=await getAllStudentsU(dbRepositoryStudent);
//         res.status(200).json({
//             status:'success',
//             message:'successylly retrieved all students',
//             data:students
//         })

//     }
    
//     )
//     const blockStudent=asyncHandler(async(req:Request,res:Response)=>{
//         const studentId:string=req.params.studentId;
//         const reason:string=req.body.reason;
//         await blockStudentU(studentId,reason,dbRepositoryStudent);

//     })

//     return {
//         getAllStudents,
//         blockStudent
//     }
// }

// export default studentController;

