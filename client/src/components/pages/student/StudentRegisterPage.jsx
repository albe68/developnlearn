import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { registerStudent } from "../../../api/endpoints/auth/studentAuth";
import { selectIsloggedIn } from "../../../redux/reducers/authSlice";
import { useSelector } from "react-redux";
import { studentRegisterValidationSchema } from "../../../validations/auth/studentRegisterValidation";
export default function StudentRegisterPage() {
  const navigate = useNavigate();
  const handleSubmit = async (studentInfo) => {

    try {
      await registerStudent(studentInfo);
      navigate("/login");
    } catch (err) {
      console.log(err, "erorrrr is consoled");

      toast(err, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };
  const isLoggedIn = useSelector(selectIsloggedIn);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="flex items-center justify-center h-screen  sm:p-6 md:p-12">
      <div className="bg-[#ffffff] flex flex-col sm:flex-row rounded-lg shadow-md text-black">
        {/* Part 1  */}
        <div className="p-8 sm:w-96">
          <h2 className="text-5xl text-black font-semibold mb-4">Signup</h2>
          <h2 className="text-sm font-semibold mb-2">
            ✓ Access up-to-date resources
          </h2>
          <h2 className="text-sm font-semibold mb-2">
            ✓ 20+ Premium tech courses
          </h2>
          <h2 className="text-sm font-semibold mb-4">
            ✓ Mentorship platform with 6+ years experienced professionals
          </h2>
          <div className="mb-4 mx-14">
            <h2 className="text-xl text-black font-semibold m-auto">
              You will learn
            </h2>
          </div>
          <div className="flex">
            <div className="m-3 flex items-center">
              <img
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
                alt="Course 1"
                className="w-8 h-8 mr-2"
              />
              <p>Course 1</p>
            </div>
            <div className="m-3 flex items-center">
              <img
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
                alt="Course 3"
                className="w-8 h-8 mr-2"
              />
              <p>Course 3</p>
            </div>
          </div>
          <div className="flex">
            <div className="m-3 flex items-center">
              <img
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
                alt="Course 1"
                className="w-8 h-8 mr-2"
              />
              <p>Course 1</p>
            </div>
            <div className="m-3 flex items-center">
              <img
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_f0b606abb6d19089febc9faeeba5bc05/nodejs-development-services.png"
                alt="Course 3"
                className="w-8 h-8 mr-2"
              />
              <p>Course 3</p>
            </div>
          </div>
        </div>

        {/* Part 2*/}
        <div className="p-8 bg-[#efeff3] rounded-lg w-full sm:w-96 flex flex-col">
          <h2 className="text-3xl font-semibold mb-4">Create an Account</h2>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
              mobile: "",
            }}
            validationSchema={studentRegisterValidationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">
                  First Name:
                </label>
                <Field
                  name="firstName"
                  type="firstName"
                  id="firstName"
                  autoComplete="firstName"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  required
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastname" className="block font-semibold mb-2">
                  Last Name:
                </label>
                <Field
                  type="lastName"
                  id="lastName"
                  name="lastName"
                  autoComplete="lastName"
                  placeholder="Enter your lastname"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  required
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-semibold mb-2">
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
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
                <label htmlFor="phone" className="block font-semibold mb-2">
                  Phone:
                </label>
                <Field
                  type="phone"
                  id="mobile"
                  name="mobile"
                  autoComplete="mobile"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                  required
                />
                <ErrorMessage
                  name="mobile"
                  component="div"
                  className="text-red-500 text-sm"
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
                  autoComplete="password"
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
                className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg mb-4"
              >
                Sign Up
              </button>
            </Form>
          </Formik>

          {/* Google Login Button */}
          {/* <button className="w-full bg-red-500 text-white font-semibold py-2 rounded-lg">
          Sign Up with Google
        </button> */}
        </div>
      </div>
    </div>
  );
}
