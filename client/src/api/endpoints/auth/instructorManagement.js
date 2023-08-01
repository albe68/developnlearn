import {getAllInstructorsService} from '../../services/instructorManageService.js'

export const getAllInstructors= ()=>{
    return getAllInstructorsService('/api/instructors/get-all-instructors');
}