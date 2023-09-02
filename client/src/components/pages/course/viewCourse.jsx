import React, { useState, useEffect } from "react";
import { Button, Chip } from "@material-tailwind/react";
import { IndividualCourseSingle } from "../../../api/endpoints/course/course";
import Razorpay_button from "../payment/razorPay-checkout";

const content = [
  {
    name: ". Install and Configure the OpenAI SDK in a Node.js Project",
    href: "#",
    current: true,
  },
  {
    name: "Initialize Prisma in a TypeScript Node Project",
    href: "/courses",
    current: false,
  },
  { name: "Alumini", href: "#", current: false },
  { name: "Resources", href: "#", current: false },
];
const IndividualCourse = () => {
  const [courses, setCourses] = useState([]); //is,the intial state of courses cards, lazy loading?
  //  const renderData=async()=>{
  //     const data=await  viewCourse();
  //     setCourses(data);

  //   };
  //   useEffect(
  //     ()=> {renderData()} ,[]);
  //  console.log(courses,"here")

  const fetchCourses = async (courseId) => {
    try {
      const response = await IndividualCourseSingle();

      setCourses(response?.data);
      //   console.log(courses, "check");
    } catch (error) {
      console.error("Error fetching course data:", error);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  console.log(courses.data, "here");
  return (
    <>
      <section className=" dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          {/* div for description side*/}
          <div className="bg-white font-light text-black-500 sm:text-md dark:text-gray-400">
            <div>
              <Chip
                className="text-xs h-5 px-1 max-w-max inline-flex items-center"
                color="green"
                value="Free"
                size="sm"
              />
            </div>

            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {courses?.data?.title}
            </h2>
            <div>
              <a href="#">
                <img
                  className="object-cover w-8 h-8 rounded-full"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                  alt=""
                />
                <h4 className="text-lg ">Instructor</h4>
                <p className="text-black">John Doe</p>
              </a>
            </div>
            <div>
              <h4 className="text-md font-semibold">Course Duration</h4>
              <p className="text-black">18 weeks</p>
              <p>12 lessons</p>
              <div className="flex">
                <p className="w-1/2">Published 2 years ago |</p>
                <p className="w-1/2">Updated 1 year ago</p>
              </div>
              <Chip
                variant="ghost"
                className="text-xs h-5 px-1 max-w-max inline-flex items-center"
                color="green"
                value={`${courses?.data?.level}`}
                size="sm"
              />
            </div>
            <p className="mb-4">{courses.description}</p>
            <div>
              <Razorpay_button>Start Watching</Razorpay_button>
            </div>
            <h1 className="text-xl">Course Introduction</h1>
             <br/>
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick.
              But, you might get the feeling that you're leaving something on the
               table. That there's more you could be doing with an advanced LLM other t
               han making drop-down menu components, and writing (admittedly really good) Bash scripts.
            </p>
          <span>Imagine, if you could integrate AI into your app itself. Customer
             support bots, generated profile pictures, automated transcription, 
             video summaries, and the list goes on.</span>
             <br/>
             <br/>

             Imagine, if you could integrate AI into your app itself. Customer
              support bots, generated profile pictures, automated transcription, video summaries, and the list goes on.
          </div>
          {/* div for description side*/}

          {/* div for content side*/}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F973%2F363%2Ffull%2F_removal_ai__d394fc56-e450-4e7a-bb78-013fc3cbb30d-transformed.png&w=640&q=100"
              alt="office content 1"
            />

            {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/> */}
            <div className="bg-green-900 w-96			">
              <h1>Course Content</h1>
              <p>53m • 11 lessons</p>

              {/* single div of course content */}
              <div className="w-full h-96	 text-gray-900 bg-white  border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {content.map((contents) => (
                  <div
                    key={contents.name}
                    className="border-b border-gray-200 button-container flex items-center py-2"
                  >
                    <button
                      type="button"
                      className="flex items-center space-x-2 focus:outline-none"
                    >
                      <img src="https://egghead.io/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdg3gyk0gu%2Fimage%2Fupload%2Fw_72%2Ch_72%2Fv1683914713%2Ftags%2Fprisma.png&w=32&q=75"></img>
                      <span className="hover:text-blue-700">
                        1. Install and Configure the OpenAI SDK in a Node.js
                        Project
                      </span>
                    </button>
                    <div className="text-xs text-gray-700 dark:text-gray-500 ml-4">
                      30min 4s
                    </div>
                  </div>
                ))}
              </div>
              {/*end of single div*/}
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};
export default IndividualCourse;
