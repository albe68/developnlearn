import React from 'react'
import { Form,Formik,ErrorMessage,Field } from 'formik'
import {adminLogin} from '../../../api/endpoints/auth/adminAuth'
 const AdminLoginPage=()=> {
    const handleSubmit=async(adminData)=>{
    console.log("hi")
      
      try { 
        const response=await adminLogin(adminData)
        
      }
      catch(err){
        console.log("error",err)
       }
      
    }
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#ffffff]">
      <div className="text-4xl font-semibold text-white my-8">DevelopnLearn</div>
      <div className="bg-[#000000] rounded-lg shadow-lg text-white p-8 sm:w-96">
        <Formik initialValues={{email:"",password:""}} onSubmit={handleSubmit}>
        <Form >
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
                autoComplete="email"

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
                autoComplete="password"

                placeholder="Enter your password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold py-2 rounded-lg mb-4 hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
           
          
          </div>
        </Form>
        </Formik>
      </div>
    </div>
  )
}

export default AdminLoginPage;
