import { Formik, Form, Field } from "formik";
import {
  SingleStudentDetail,
  updateProfile,
} from "../../../api/endpoints/student/student";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { selectUserId } from "../../../redux/reducers/authSlice";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import {BeatLoader} from 'react-spinners'
export default function StudentProfile() {
  const [studentDetail, setStudentDetail] = useState([]);
  const [loading, setLoading] = useState(true);
  const studentID =useSelector(selectUserId)
  console.log(studentID,'check studen')
  const student = async () => {
    try {
      const response = await SingleStudentDetail(studentID);
      setStudentDetail(response?.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    student();
  }, []);
  const id =useSelector(selectUserId)
  async function handleSubmit(studentPayload) {
   
    console.log(id,'check studen')
    console.log(studentPayload,'gap',id,'cej')
    const response = await updateProfile(studentPayload,id);
    toast('Successfully Updated Profile ', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    console.log(response, "yo");
  }
  const { firstName, lastName, email } = studentDetail;
  console.log(firstName, lastName, email, "cool");
  const studentIntialValue = {
    firstName: firstName,
    lastName: lastName,
    email: email,
  };
  console.log(studentIntialValue, "protity");
  return (
    <>
    
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
        <BeatLoader/>

        </div>
      ) : (
        <>
          <Formik
            onSubmit={handleSubmit}
            initialValues={studentIntialValue}
            enableReinitialize={true}
          >
              <div className="border border-solid max-w-xl mx-auto px-4  ">
            <Form>

                <div className="min-h-screen flex items-center justify-center">
                  <div className="max-w-xl mx-auto px-4">
                    <div>
                      <div className="px-4 sm:px-0">
                        <h3 className="text-base font-semibold leading-7 text-gray-900">
                          Edit Profile
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                         Edit Personal details and application.
                        </p>
                      </div>
                      <div className="mt-6 border-t border-gray-100">
                        <dl className="divide-y divide-gray-100">
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              First Name
                            </dt>
                            <Field
                              type="text"
                              id="firstName"
                              name="firstName"
                              placeholder="Enter your text"
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Application for
                            </dt>
                            <Field
                              type="text"
                              id="lastName"
                              name="lastName"
                              placeholder="Enter your text"
                              className="w-full px-4 py-2 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">
                              Email address
                            </dt>
                            <Field
                              type="email"
                              id="email"
                              name="email"
                              placeholder="Enter your text"
                              className="w-full px-6 py-3 border rounded-lg focus:outline-none"
                              required
                            />
                          </div>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-black text-white font-semibold py-2 rounded-lg mb-4 hover:bg-green-600 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
            </Form>

              </div>
          </Formik>
        </>
      )}
    </>
  );
}
