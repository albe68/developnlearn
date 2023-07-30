import React, { useEffect } from "react";
import { Formik,Form,Field,ErrorMessage } from "formik";
import {loginInstructor} from '../../../api/endpoints/auth/instructorAuth';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setToken,selectIsloggedIn,selectUserType } from "../../../redux/reducers/authSlice";

const InstructorLoginPage=()=>{
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const isLoggedIn=useSelector(selectIsloggedIn);
    const user=useSelector(selectUserType);
    console.log(user)

    const handleSubmit=async(instructorData)=>{
      try { 
        console.log(isLoggedIn,user,"data");
        const response=await loginInstructor(instructorData);
        const {accessToken,refreshToken}=response.data;
        dispatch(setToken({accessToken,refreshToken,userType:'instructor'}));
        response && navigate('/instructors');
    }
        catch(err){
            console.log(err);
        }
        
    }
    useEffect(()=>{
        if(isLoggedIn){
            console.log("route validation")
            navigate('/instructors')
        }
    },[])
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-[#c3bebe]">
      <div className="text-4xl font-semibold text-black my-8">DevelopnEarn</div>
      <div className="bg-[#ffffff] rounded-lg shadow-lg text-black p-8 sm:w-96">
        <Formik initialValues={{email:"",password:""}} onSubmit={handleSubmit}>
        <Form  >
          {/* Part 1: Text Content */}
          <div>
            <h2 className="text-3xl font-semibold mb-4">Login to Your Account</h2>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-2">
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                
                placeholder="Enter your email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-semibold mb-2">
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white font-semibold py-2 rounded-lg mb-4 hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
            {/* Google Login Button */}
            <button className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-300">
              Login with Google
            </button>
            <div className="mt-4 text-sm text-gray-300">
              Don't have an account yet? <a href="#signup" className="underline">Sign Up</a>
            </div>
          </div>
        </Form>
        </Formik>

      </div>
    </div>
    )
}
export default InstructorLoginPage;