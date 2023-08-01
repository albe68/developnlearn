// import {studentInterface} from '../../../../types/studentInterface';
import { StudentInterface } from '@src/types/studentInterface'
import Student from '../models/student'
import {StudentRegisterInterface} from '@src/types/studentRegisterInterface'
import mongoose from 'mongoose'

export const studentRepositoryMongoDB=()=>{
        const addStudent=async (student:StudentRegisterInterface)=>{
            return await Student.create(student)
        }
        const getStudentByEmail=async(email:string)=>{

            const user:StudentInterface | null =await Student.findOne({email});
            console.log(user,"here")
            return user;
        }

        const getAllStudents=async()=>{
            const students:StudentInterface[]|null =await Student.find({})
            return students;
        }

        const getStudent=async(id:string)=>{
            const student:StudentInterface[]|null =
            await Student.findById({
            _id:new mongoose.Types.ObjectId(id)
            });
            return student
        }

        const blockStudent=async (id:string)=>{
                await Student.updateOne(
                    {_id: new mongoose.Types.ObjectId(id)},
                    {isBlocked:true}
                );
        }

        const unBlockStudent =async (id:string)=>{
            console.log("first")
            await Student.updateOne({
                _id:new mongoose.Types.ObjectId(id),
            },
            {isBlocked:false,blockedReason:null}

            );
        }
     
        return{
            addStudent,
            getStudentByEmail,
            getAllStudents,
            getStudent,
            blockStudent,
            unBlockStudent
            
        }
}
    export type StudentRepositoryMongoDB=typeof studentRepositoryMongoDB;
