import React from 'react';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import { otpValidationSchema } from '../../../validations/auth/otpValidationSchema';

export default function OtpPage() {
  return (
    <>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="font-semibold text-3xl">
                <p>Email Verification</p>
              </div>
              <div className="flex flex-row text-sm font-medium text-gray-400">
                <p>We have sent a code to your email ba**@dipainhouse.com</p>
              </div>
            </div>

            <div>
              <Formik
                validationSchema={otpValidationSchema}
                initialValues={{ otp1: '', otp2: '', otp3: '', otp4: '' }}
                onSubmit={(values) => {
                  // Handle form submission here
                }}
              >
                <Form >
                  <div className="flex flex-col space-y-16">
                    <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                      {[1, 2, 3, 4].map((index) => (
                        
                        <div key={index} className="w-16 h-16">
                        {console.log("index",index)}
            <ErrorMessage name={`otp${index}`} component='div' className='text-red-500 text-sm'/>
                         
                          <Field
                            maxLength="1"
                            className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                            type="text"
                            name={`otp${index}`}
                            id={`code${index}`}
                            autoComplete={`code${index}`}
                          />

                        </div>
                        
                      ))}
                    </div>

                    <div className="flex flex-col space-y-5">
                      <div>
                        <button
                          type="submit"
                          className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                        >
                          Verify Account
                        </button>
                      </div>

                      <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                        <p>Didn't receive code?</p>{' '}
                        <a
                          className="flex flex-row items-center text-blue-600"
                          href="http://"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Resend
                        </a>
                      </div>
                    </div>
                  </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
