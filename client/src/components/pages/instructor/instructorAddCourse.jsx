import React from 'react'
import { Field,Formik,Form } from 'formik'
export default function InstructorAddCourse() {
    const intialValues={
        title:"",
        duration:"",
        level:"",
        tags:"",
        description:"",
        requirements:"",
        price:""
    }
    const handleForm=()=>{
        console.log("form called")
    }
  return (
    <>
    <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
    <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add Course</h2>
    <Formik initialValues={intialValues}  onSubmit={handleForm}>
    <Form>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
        <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="title">title</label>
                <Field name="title" id="title"  type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border
                 border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600
                  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300
                   focus:outline-none focus:ring0"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">duration</label>
                <Field name="duration" id="duration" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
                  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
                   dark:focus:border-blue-300 focus:outline-none focus:ring0"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">level</label>
                <Field name="level" id="level" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
                  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
                   dark:focus:border-blue-300 focus:outline-none focus:ring0"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="password">tags</label>
                <Field name="tags" id="text" type="tags" className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300
                  dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40
                   dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>

            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="description">description</label>
                <Field name="description" id="description" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">requirements</label>
                <Field name="requirements" id="requirements" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring0"/>
            </div>
            <div>
                <label className="text-gray-700 dark:text-gray-200" htmlFor="price">price</label>
                <Field  name="price" id="price" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700
                 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring0"/>
            </div>
          
        </div>

        <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </Form>
    </Formik>
</section>
    </>
  )
}
