import {getAllStudentsService,blockStudentService,unBlockStudentService} from '../../services/student/studentManageService';
import  END_POINTS from '../../../constants/endpoints'

export const getAllStudents= ()=>{
    return getAllStudentsService(END_POINTS.GET_ALL_STUDENTS);
}
export const blockStudent=(studentId)=>{
    console.log("studentId",studentId)
    return blockStudentService(`${END_POINTS.BLOCK_A_STUDENT}${studentId}`,studentId)
}

export const unblockStudent=(studentId)=>{
    return unBlockStudentService(`${END_POINTS.UNBLOCK_A_STUDENT}${studentId}`,studentId)

}
