import React, { useEffect, useState } from "react";
import { loginStudent } from "../../../api/endpoints/auth/studentAuth";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../../redux/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { selectIsloggedIn } from "../../../redux/reducers/authSlice";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { studentLoginValidationSchema } from "../../../validations/auth/studentLoginValidationSchema";
import {toast} from 'react-toastify';
const StudentLoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsloggedIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleFormSubmit = async ( student) => {
    try {
      const {email,password}=student;
      const response = await loginStudent(email, password);
      console.log(response, "reponse is it");
      const { accessToken, refreshToken } = response.data;
      console.log(accessToken, refreshToken, "must");
      dispatch(setToken({ accessToken, refreshToken, userType: "student" }));
      response.data.status === "success" && navigate("/");
    } catch (error) {
      toast.error(error)
      console.log(error,'here');
    }
  };
  useEffect(() => {
    if (isLoggedIn) {
      console.log("redirection");
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#ffffff]">
      <div className="text-4xl font-semibold text-white my-8">
        DevelopnLearn
      </div>
      <div className="bg-[#fbfbfd] rounded-lg shadow-lg text-black p-8 sm:w-96">
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={studentLoginValidationSchema}
          onSubmit={handleFormSubmit}
        >
          <Form >
            {/* Part 1: Text Content */}
            <div>
              <h2 className="text-3xl font-semibold mb-4">
                Login to Your Account
              </h2>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email:
                </label>
                <Field
                  name="email"
                  type="email"
                  id="email"
                  
                  // Bind the value attribute to the email state
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  required
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block font-semibold mb-2">
                  Password:
                </label>
                <Field
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  required
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg mb-4 hover:bg-green-600 transition duration-300"
              >
                Login
              </button>
              {/* Google Login Button */}
              {/* <button className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-300">
              Login with Google
            </button> */}
              <div className="mt-4 text-sm text-gray-300">
                Don't have an account yet?{" "}
                <a href="/register" className="underline">
                  Sign Up
                </a>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default StudentLoginPage;
