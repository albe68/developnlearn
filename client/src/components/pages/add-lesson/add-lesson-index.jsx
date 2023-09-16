import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik";
import {
  PaintBrushIcon,
  PaperClipIcon,
  PhotoIcon,
  UserCircleIcon,
  ArrowUpOnSquareStackIcon,
} from "@heroicons/react/24/solid";

import { useState } from "react";
import { addLesson } from "../../../api/endpoints/course/lesson";
import { toast } from "react-toastify";
import { addLessonValidationSchema } from "../../../validations/lesson/addLessonValidationSchema";
import { useParams } from "react-router-dom";
export default function AddLessonIndex() {
  const params = useParams();
  const [videoFile, setVideoFile] = useState(null);

  const courseId = params.courseId;
  const [selectedFiles, setSelectedFiles] = useState([]);
 
  const intialValues = {
    lesson_name: "",
    duration: "",
    description: "",
  };


  const handleForm = async (values, { resetForm }) => {
    const formData = new FormData();
    formData.append("media", videoFile);

 

    Object.keys(values).forEach((key) => {
      formData.append(key, values[key]);
    });

    var formDataObject = {};
    for (const [key, value] of formData.entries()) {
      formDataObject[key] = value;
    }
    // Convert JSON object to a string for easy display
    var formDataString = JSON.stringify(formDataObject, null, 2);

    // Log the FormData as a string
    const response = await addLesson(formData, courseId);
    resetForm();

    // toast.success(response.data.message);
  };
  return (
    <>
      <section className="max-w-lg p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <h1>Add Lessons</h1>
        <Formik
          validationSchema={addLessonValidationSchema}
          initialValues={intialValues}
          onSubmit={handleForm}
        >
          <Form encType="multipart/form-data">
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Title
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="lesson_name"
                        id="lesson_name"
                        autoComplete="lesson_name"
                        className=" block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="lesson_name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="duration"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Duration
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="duration"
                        id="duration"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="duration"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Description
                    </label>
                    <div className="mt-2">
                      <Field
                        id="description"
                        name="description"
                        type="text"
                        autoComplete="description"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                      <ErrorMessage
                        name="description"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <div className="sm:col-span-6">
                      <label
                        htmlFor="video-file"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Video File
                      </label>
                      <div className="mt-2 flex items-center gap-x-2 ">
                        {/* <Field
                          id="videoFile"

                          name="media"
                          accept="video/*"
                          type="file"
                          autoComplete="off"

                          className=" w-full custom-file-input"
                          onChange={(event) => {
                            const file= event.target.files?.[0];
                            console.log(file,'real')
                            setVideoFile(file);

                            // setVideos(event.target.files[0])
                            const files = event.target.files; // Get the selected files from the input
                            // setSelectedFiles(file.name);
                            const newFiles = Array.from(files).filter(
                              (file) => {
                                return !selectedFiles.some(
                                  (selectedFile) =>
                                    selectedFile.name === file.name
                                );
                              }
                            );
                            setSelectedFiles([...selectedFiles, ...newFiles]); // Add new files to the existing selectedFiles array
                          }}
                        /> */}
                        <Field
                          id="videoFile"
                          name="media" // Ensure this matches the key in FormData
                          accept="video/*"
                          type="file"
                          autoComplete="off"
                          className="w-full custom-file-input"
                          onChange={(event) => {
                            const file = event.target.files?.[0];
                            console.log(file, "real");
                            setVideoFile(file); // Corrected: setVideoFile instead of setVideos

                            const files = event.target.files; // Get the selected files from the input
                            const newFiles = Array.from(files).filter(
                              (file) => {
                                return !selectedFiles.some(
                                  (selectedFile) =>
                                    selectedFile.name === file.name
                                );
                              }
                            );
                            setSelectedFiles([...selectedFiles, ...newFiles]); // Add new files to the existing selectedFiles array
                          }}
                        />

                        <ErrorMessage
                          name="video"
                          component="div"
                          className="text-red-500 text-sm"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </Form>
        </Formik>
      </section>

      <div className="ml-auto  absolute top-0 right-0 mt-4 mr-4 p-6 w-1/4 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold flex items-center justify-center">
          Selected Files
        </h2>
        <div className="border rounded-md">
          {selectedFiles.length > 0 ? (
            <ul id="this" className="mt-4 space-y-2 p-4 rounded-md">
              {selectedFiles.map((file, index) => (
                <li
                  className="bg-white border border-gray-500 w-2/3 h-10 flex items-center justify-center rounded-md"
                  key={index}
                >
                  <div className="flex items-center space-x-1 justify-center">
                    {" "}
                    {/* Center the content */}
                    <ArrowUpOnSquareStackIcon className="w-4 h-4 ml-1" />
                    <span className="flex items-center">
                      {" "}
                      {/* Center the text */}
                      {file.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="bg-white w-2/3 h-10 flex items-center justify-center rounded-md">
              <div className="flex items-center space-x-1">
                <h1>Upload videos here</h1>
                <ArrowUpOnSquareStackIcon className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
