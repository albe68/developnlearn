import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
import { studentReducer  } from "./reducers/studentSlice";
import { instructorReducer  } from "./reducers/instructorSlice";

// import * as reduxThunk from "redux-thunk/extend-redux";

export const store=configureStore({
    reducer:{
        auth:authReducer,
        student:studentReducer,
        instructor:instructorReducer,

    }
});

