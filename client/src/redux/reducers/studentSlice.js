import { createSlice } from "@reduxjs/toolkit";

const initialState={
    students:[]
}

const studentSlice=createSlice({
    name:'students',
    initialState,
    reducers:{
        setStudents(state,action){
            
          state.students=action.payload;
            },
        blockStudent(state,action){
            state.students=action.payload;
            const {studentId}=action.payload;
            const student=state.students.find(s=>s._id===studentId);
            if(student){
                student.blocked=true;
            }
            }

    }
})

export const {setStudents,blockStudent}=studentSlice.actions;

export const studentReducer=studentSlice.reducer;
export const selectStudents = (state) => state.students.students;
