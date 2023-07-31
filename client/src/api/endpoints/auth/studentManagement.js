import {getAllStudentsService,blockStudentService,unBlockStudentService} from '../../services/studentManageService.js';

export const getAllStudents= ()=>{
    return getAllStudentsService('/api/students/get-all-students');
}
export const blockStudent=(studentId)=>{
    console.log(studentId,"helooooo")
    return blockStudentService('/api/students/block-student/64c641bf0bc94f9755be83c7',studentId)
}

export const unblockStudent=(studentId)=>{
    return unBlockStudentService('/api/students/unblock-student/64c641bf0bc94f9755be83c7',studentId)

}
