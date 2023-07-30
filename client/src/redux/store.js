import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/authSlice";
// import * as reduxThunk from "redux-thunk/extend-redux";

export const store=configureStore({
    reducer:{
        auth:authReducer
    }
});
