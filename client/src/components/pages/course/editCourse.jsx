import React from 'react'
import { Form,Formik,Field,ErrorMessage } from 'formik'
import { editCourseValidationSchema } from '../../../validations/course/editCourseValidationSchema';
import { editCourse } from '../../../api/endpoints/auth/courseManagement';
import { useState } from 'react';
export default  function EditCourse() {

 async function handleSubmit(editData){
    await editCourse(editData);


}
  const editCourseIntialValues={
    title:"svelte kit",
    duration:"10",
    level:"beginner",
    tags:"advance",
    description:"you are gonna nail it",
    requirements:"nodejs",
    price:"$300"

  }
  return (
    <>
 <div className="flex items-center justify-center p-12">
    <Formik validationSchema={editCourseValidationSchema} initialValues={editCourseIntialValues}
    onSubmit={handleSubmit}>
  <div className="mx-auto w-full max-w-[550px] bg-white">
    <Form >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Full title
        </label>
        <Field
          type="text"
          name="title"
          id="title"
          placeholder="Title"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <ErrorMessage name="title" component='div' className='text-red-500 text-sm'/>

      <div className="mb-5">
        <label
          htmlFor="phone"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Phone Number
        </label>
        <Field
          type="text"
          name="duration"
          id="duration"
          placeholder="duration"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      <ErrorMessage name="duration" component='div' className='text-red-500 text-sm'/>

      </div>
      <div className="mb-5">
        <label
          htmlFor="email"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Email Address
        </label>
        <Field
          type="text"
          name="level"
          id="level"
          placeholder="level"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="date"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Date
            </label>
            <Field
              type="text"
              name="tags"
              id="tags"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              htmlFor="time"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              description
            </label>
            <Field
              type="text"
              name="description"
              id="description"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="mb-5 pt-3">
        <label
          className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl"
        >
          Address Details
        </label>
        <div className="-mx-3 flex flex-wrap">
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <Field
                type="text"
                name="requirements"
                id="requirements"
                placeholder="requirements"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
          </div>
          <div className="w-full px-3 sm:w-1/2">
            <div className="mb-5">
              <Field
                type="text"
                name="price"
                id="price"
                placeholder="price"
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
          className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Book Appointment
        </button>
      </div>
    </Form>
  </div>
  </Formik>
</div>

    </>
  )
}
