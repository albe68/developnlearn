// import {studentInterface} from '../../../../types/studentInterface';
import { StudentInterface,StudentUpdateInfo } from '@src/types/studentInterface'
import Student from '../models/student'
import {StudentRegisterInterface} from '@src/types/studentRegisterInterface'
import mongoose from 'mongoose'
import { populate } from 'dotenv'

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
            await Student.updateOne({
                _id:new mongoose.Types.ObjectId(id),
            },
            {isBlocked:false,blockedReason:null}

            );
        };

        const viewProfile=async(id:string)=>{
          const student_detail:StudentInterface|null=
        await Student.findById({_id:new mongoose.Types.ObjectId(id)
        },

          );
          return student_detail;
        };

        const editProfile=async(id:string,edit_data:StudentUpdateInfo)=>{
            await Student.updateOne({
                _id:new mongoose.Types.ObjectId(id)
            },{
                ...edit_data
            },)
        }

        const getEnrolledStudents=async(studentId:string)=>{
          const response=  await Student.findOne({_id:studentId}).populate(
                {path:"students",populate:{path:"students"}}
                );
          console.log(response,"in mongo repository")
                return response;
        }
     
        return{
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
    export type StudentRepositoryMongoDB=typeof studentRepositoryMongoDB;
