import {createSlice} from '@reduxjs/toolkit';
import decodeToken from '../../utils/decode'

const accessToken=localStorage.getItem("accessToken");
const refreshToken=localStorage.getItem("accessToken");
const decodedToken=decodeToken(accessToken??"");

const initialState={
    data:{
    accessToken
    },
    userType:decodedToken?.payload.role
};

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        setToken(state,action){
            console.log(state,"first state")
            const serializedAccessToken=JSON.stringify(accessToken);
            const serializedRefreshToken=JSON.stringify(refreshToken);
           
            localStorage.setItem("accessToken",serializedAccessToken);
            localStorage.setItem("refreshToken",serializedRefreshToken);

            state.data={
                accessToken:action.payload.accessToken,
                refreshToken:action.payload.refreshToken
            };
            state.isLoggedIn=true;
            state.userType=action.payload.userType;
            console.log(state,"user logged in")
            

        },
        clearToken(state){
            state.data={
                accessToken:"",
                refreshToken:"",

            };
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            state.isLoggedIn=false;
            state.userType="";
            console.log("user logged out")


        }
    }
})

export const {setToken,clearToken}=authSlice.actions;
export const authReducer=authSlice.reducer;
export const selectIsloggedIn =()=>{
    const accessToken=localStorage.getItem("accessToken");

    return accessToken ? true:false;
}
export const selectUserType=(state)=>{state.auth.userType};



