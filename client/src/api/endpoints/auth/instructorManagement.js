import {getAllInstructorsService,
    acceptInstructorRequestService,
    rejectInstructorRequestService} from '../../services/instructorManageService.js'

export const getAllInstructors= ()=>{
    return getAllInstructorsService('/api/instructors/get-all-instructors');
}

export const acceptInstructorRequest=(instructorId)=>{
    return acceptInstructorRequestService(`/api/instructors/accept-instructor-request/`,instructorId);
}

export const rejectInstructorRequest=(instructorId)=>{
    return rejectInstructorRequestService(`/api/instructors/decline-instructor-request/`,instructorId);
}

export const getInstructorsRequests=()=>{

    return getAllInstructorsService('/api/instructors/instructor-requests'); 
}