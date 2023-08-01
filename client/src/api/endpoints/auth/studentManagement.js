import {getAllStudentsService,blockStudentService,unBlockStudentService} from '../../services/studentManageService.js';
import  END_POINTS from '../../../constants/endpoints'

export const getAllStudents= ()=>{
    return getAllStudentsService(END_POINTS.GET_ALL_STUDENTS);
}
export const blockStudent=(studentId)=>{
    return blockStudentService(`${BLOCK_INSTRUCTORS}${studentId}`,studentId)
}

export const unblockStudent=(studentId)=>{
    return unBlockStudentService(`/api/students/unblock-student/${studentId}`,studentId)

}
