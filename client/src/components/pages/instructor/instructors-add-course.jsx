import React from 'react'
import { Field,Formik,Form,ErrorMessage } from 'formik'
import { PaintBrushIcon,PaperClipIcon,PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { CourseAddForm } from './courseadd-form';
import { useState } from 'react';
import { addCourse } from '../../../api/endpoints/auth/courseManagement';
import {toast} from 'react-toastify';
import { addCourseValidationSchema } from '../../../validations/course/addCourseValidationSchema';
export default function AddCourseTab() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [videos,setVideos]=useState(null);

const intialValues={
    title:"",
    duration:"",
    level:"",
    tags:"",
    description:"",
    requirements:"",
    price:""
}
const handleForm=async(values,{resetForm})=>{ 
  console.log("HEre")

  const formData=new FormData();
  videos && formData.append("videos",videos);
  Object.keys(values).forEach(key=>{
    formData.append(key,values[key]);
  });
  console.log(formData.values,"here");
  for (const value of formData.values()) {
    console.log(value,'mrthyu');
  }
 const response=await addCourse(formData);
 resetForm();
  
//  toast.success(response.data.message)

}
return(
  <>

<section className="max-w-lg p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
<Formik validationSchema={addCourseValidationSchema} initialValues={intialValues}  onSubmit={handleForm}>
<Form > 
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                Title
              </label>
              <div className="mt-2">
                <Field
                  type="text"
                  name="title"
                  id="title"
                  autoComplete="title"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                   <ErrorMessage
                  name="title"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="duration" className="block text-sm font-medium leading-6 text-gray-900">
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
              <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                Description
              </label>
              <div className="mt-2">
                <Field
                  id="description"
                  name="description"
                  type="description"
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
            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
              level
              </label>
              <div className="mt-2">
                <Field
                  type="text"
                  name="level"
                  id="level"
                  autoComplete="level"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                 <ErrorMessage
                  name="level"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Pricing
              </label>
              <div className="mt-2">
                <Field
                  as="select"
                  id="price"
                  name="price"
                  autoComplete="price"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >

                  <option>Free</option>

                  <option value={2000}>INR ₹2000</option>
                  <option value={2000}>INR ₹3000</option>
                  <option value={2000}>INR 4000</option>
                </Field>
                <ErrorMessage
                  name="price"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
              requirements
              </label>
              <div className="mt-2">
                <Field
                  type="text"
                  name="requirements"
                  id="requirements"
                  autoComplete="requirements"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  <ErrorMessage
                  name="requirements"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                tags
              </label>
              <div className="mt-2">
                <Field
                  type="text"
                  name="tags"
                  id="tags"
                  autoComplete="tags"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                  <ErrorMessage
                  name="tags"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            {/* <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                Requirenments
              </label>
              <div className="mt-2">
                <Field
                  type="text"
                  name="region"
                  id="region"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div> */}

            <div className="sm:col-span-2">
              {/* <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                Tags
              </label>
              <div className="mt-2">
                <Field
                  type="text"
                  name="postal-code"
                  id="postal-code"
                  autoComplete="postal-code"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div> */}

              <div className="sm:col-span-6">
                <label htmlFor="video-file" className="block text-sm font-medium leading-6 text-gray-900">
                  Video File
                </label>
                <div className="mt-2 flex items-center gap-x-2">
                  <Field
                    type="file"
                    name="video"
                    id="video"
                    accept='video/*'
                    required
                    className="block w-full"
                    onChange={(event) => {
                      console.log(event,"event hapepens")
                      const file=event.target.files?.[0] || null;
                      setVideos(file);
                      
                    }}
                  />
                </div>
              </div>
            </div>
            
             
          </div>
        </div>

    
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
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
<div className="ml-auto  absolute top-0 right-0 p-6 w-1/4 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Selected Files</h2>
        <div className='border 		'>
        <ul className="mt-4 space-y-2">
          {selectedFiles.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
        </div>
      </div>
</>

)
}