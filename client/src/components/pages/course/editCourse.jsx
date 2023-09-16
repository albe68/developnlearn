import { Form, Formik, Field, ErrorMessage } from "formik";
import { editCourseValidationSchema } from "../../../validations/course/editCourseValidationSchema";
import { editCourse } from "../../../api/endpoints/auth/courseManagement";
import { useState, useEffect } from "react";
import { IndividualCourseSingle } from "../../../api/endpoints/course/course";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

export default function EditCoursePage() {
  const [courses, setCourses] = useState([]);
  const params = useParams();
  const [loading, setLoading] = useState(true);

  const courseId = params.courseId;
  const fetchCourses = async () => {
    try {
      const response = await IndividualCourseSingle(courseId);
      console.log(response?.data.data, "response check");
      setCourses(response?.data?.data);
      setLoading(false);

    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, );

  const { title, description, duration, level, tags, requirements, price } =
    courses;
  async function handleSubmit(editData) {
  try{  await editCourse(editData);
    toast("Edited Course Details", {
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
    catch(e){
      toast("Something went wrong", {
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
  }
  const editCourseIntialValues = {
    title: title,
    duration: duration,
    tags: tags,
    description: description,

    requirements: requirements,
    price: price,
    level: level,
  };

  // const { firstName, lastName, email } = studentDetail;
  // console.log(firstName, lastName, email, "cool");
  // const studentIntialValue = {
  //   firstName: firstName,
  //   lastName: lastName,
  //   email: email,
  // };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="flex items-center justify-center p-12">
          <Formik
            validationSchema={editCourseValidationSchema}
            initialValues={editCourseIntialValues}
            onSubmit={handleSubmit}
          >
            <div className="mx-auto w-full max-w-[550px] bg-white">
              <Form>
                <div className="mb-5">
                  <label
                    htmlFor="name"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Course Title
                  </label>
                  <Field
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm"
                />

                <div className="mb-5">
                  <label
                    htmlFor="duration"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Duration
                  </label>
                  <Field
                    type="text"
                    name="duration"
                    id="duration"
                    placeholder="duration"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <ErrorMessage
                    name="duration"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="tags"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Tags
                  </label>
                  <Field
                    type="text"
                    name="tags"
                    id="tags"
                    placeholder="tags"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="description"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Description
                      </label>
                      <Field
                        type="text"
                        name="description"
                        id="description"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 sm:w-1/2">
                    <div className="mb-5">
                      <label
                        htmlFor="requirements"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Requirements
                      </label>
                      <Field
                        type="text"
                        name="requirements"
                        id="requirements"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-5 pt-3">
                  <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                    Price
                  </label>
                  <div className="-mx-3 flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2">
                      <div className="mb-5">
                        <Field
                          type="text"
                          name="price"
                          id="price"
                          placeholder="requirements"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 sm:w-1/2">
                      <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                        Level
                      </label>
                      <div className="mb-5">
                        <Field
                          type="text"
                          name="level"
                          id="level"
                          placeholder="level"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                      </div>
                    </div>
                    {/* <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <Field
                type="text"
                name="state"
                id="state"
                placeholder="Enter state"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div> */}
                    {/* <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <Field
                type="text"
                name="post-code"
                id="post-code"
                placeholder="Post Code"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div> */}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </Formik>
        </div>
      )}
    </>
  );
}
