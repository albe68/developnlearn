import { createSlice } from "@reduxjs/toolkit";
import decodeToken from "../../utils/decode";

const accessToken = localStorage.getItem("accessToken");
const refreshToken = localStorage.getItem("accessToken");
const decodedToken = decodeToken(accessToken ?? "");

const initialState = {
  data: {
    accessToken: accessToken,
    refreshToken,
  },
  isLoggedIn: accessToken ? true : false,
  userType: decodedToken?.payload.role,
  userId: decodedToken?.payload.Id,

};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      const serializedAccessToken = JSON.stringify(action.payload.accessToken);
      const serializedRefreshToken = JSON.stringify(
        action.payload.refreshToken
      );

      localStorage.setItem("accessToken", serializedAccessToken);
      localStorage.setItem("refreshToken", serializedRefreshToken);

      state.data = {
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken,
      };
      state.isLoggedIn = true;
      state.userType = action.payload.userType;
      state.userId=action.payload.userId;
      console.log("user logged in");
    },
    clearToken(state) {
      state.data = {
        accessToken: "",
        refreshToken: "",
      };
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      state.isLoggedIn = false;
      state.userType = "";
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export const authReducer = authSlice.reducer;
export const selectIsloggedIn = () => {
  const accessToken = localStorage.getItem("accessToken");

  return accessToken ? true : false;
};
//these are selectors returning data of state
export const selectAccessToken = (state) => {
  const accessTokenString = state.auth.data.accessToken;
  const accessToken = JSON.parse(accessTokenString ?? "")?.accessToken || "";
  return accessToken;
};
export const selectUserType = (state) => {
 return state.auth.userType;
};
export const selectUserId=(state)=>{
 return state.auth.userId;
  
}
