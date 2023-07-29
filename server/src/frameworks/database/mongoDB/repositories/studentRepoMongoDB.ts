// import {studentInterface} from '../../../../types/studentInterface';
import { StudentInterface } from '@src/types/studentInterface'
import Student from '../models/student'
import {StudentRegisterInterface} from '@src/types/studentRegisterInterface'
import mongoose from 'mongoose'

export const studentRepositoryMongoDB=()=>{
        const addStudent=async (student:StudentRegisterInterface)=>{
            return await Student.create(student)
        }
        const getStudentByEmail=async(email:String)=>{
            const user:StudentInterface | null =await Student.findOne({email});
            return user;
        }

        const getAllStudents=async()=>{
            const students:StudentInterface[]|null =await Student.find({})
            return students;
        }
     
        return{
            addStudent,
            getStudentByEmail,
            getAllStudents
            
        }
}
    export type StudentRepositoryMongoDB=typeof studentRepositoryMongoDB;
