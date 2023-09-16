import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  instructors: [],
};

const instructorSlice = createSlice({
  name: "instructors",
  initialState,
  reducers: {
    setInstructors(state, action) {
      state.instructors = action.payload;
    },
  },
});

export const {setInstructors}=instructorSlice.actions;
export const instructorReducer=instructorSlice.reducer;

