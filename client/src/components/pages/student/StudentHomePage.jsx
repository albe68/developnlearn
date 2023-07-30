import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectIsloggedIn } from "../../../redux/reducers/authSlice";
import { selectUserType } from "../../../redux/reducers/authSlice";
const StudentHomePage=()=>{
    const isLoggedIn=selectIsloggedIn;
    const user=useSelector(selectUserType)
    console.log(isLoggedIn)
    useEffect(()=>{
        isLoggedIn && user==="student"
        console.log("hi")
    },[])
    return(
        <h1>This is home Page</h1>
    )
}

export default StudentHomePage;