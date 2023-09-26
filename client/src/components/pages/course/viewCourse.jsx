import React, { useState, useEffect } from "react";
import { Button, Chip } from "@material-tailwind/react";
import { IndividualCourseSingle } from "../../../api/endpoints/course/course";
import RazorpayButton from "../payment/razorPay-checkout";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { selectUserId } from "../../../redux/reducers/authSlice";
import { listLessons } from "../../../api/endpoints/course/lesson";
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
  const [lessons, setLessons] = useState([]); //is,the intial state of courses cards, lazy loading?

  const params = useParams();
  const route = params.courseId;
  const [isLoading, setIsLoading] = useState(true);
  const studentId = useSelector(selectUserId);

  useEffect(() => {
    const fetchCourses = async (routes) => {
      try {
        const response = await IndividualCourseSingle(routes);
        console.log(response?.data.data?.studentsEnrolled);
        setCourses(response?.data?.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        toast.error("Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.error("Error fetching course data:", error);
      }
    };
    const fetchLessons = async (routes) => {
      try {
        const response = await listLessons(route);
        setLessons(response?.data?.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (err) {
        toast.error("Something went wrong", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        console.error("Error fetching course data:", err);
      }
    };
    fetchCourses(route);
    fetchLessons(route);
  }, []);

  if (isLoading) {
    return (
      <section className=" dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          {/* div htmlFor description side*/}
          <div className="bg-white font-light text-black-500 sm:text-md dark:text-gray-400">
            <div>
              <Chip
                className=" text-xs mb-6 h-5 px-1 max-w-max inline-flex items-center"
                color="green"
                value="PAID"
                size="sm"
              />
            </div>
            <div
              className="mb-2   animate-pulse w-80 h-10 bg-gray-400 rounded-md"
              html="title"
            ></div>
            <div className="p-6">
              <div
                className="bg-gray-200 object-cover mb-2   w-8 h-8 animate-pulse rounded-full"
                name="profile picture"
              ></div>
              <div
                className="bg-gray-200 w-20  h-5 mb-4 animate-pulse rounded-md"
                name="role"
              ></div>
              <div
                className="bg-gray-200 w-20 h-5 mb-4 animate-pulse rounded-md"
                name="instructor name"
              ></div>
            </div>
            <div>
              <div
                className="bg-gray-200 w-20 h-5 mb-4 animate-pulse rounded-md"
                name="duration title span"
              ></div>
              <div
                className="bg-gray-200 w-20 h-8 mb-1 animate-pulse rounded-md  "
                name="duration"
              ></div>

              <div
                className="bg-gray-200 mb-2  w-20 h-8 animate-pulse rounded-md  "
                name="lessons count"
              ></div>

              <div className="flex">
                <div
                  className="bg-gray-200 w-20 mr-2 h-8 animate-pulse rounded-md  "
                  name="published time"
                ></div>
                <div
                  className="bg-gray-200 mb-2 w-20 h-8 animate-pulse rounded-md  "
                  name="updated time"
                ></div>
              </div>
              <div
                htmlFor="course level"
                className="bg-gray-200 animate-pulse w-20 h-8 rounded-xlinline-flex items-center "
              />
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                {/* ${courses?.data?.price} */}
              </h2>
            </div>
            {/* <p className="mb-4">{courses?.data?._id}</p> */}
            <div
              htmlFor="razor pay button shimmer"
              className="bg-grey  -200 ml-48 w-20 h-13 animate-pulse rounded-md "
            >
              Start Watching
            </div>
            <h1 className="text-xl">Course Introduction</h1>
            <br />
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick. But, you
              might get the feeling that you're leaving something on the table.
              That there's more you could be doing with an advanced LLM other t
              han making drop-down menu components, and writing (admittedly
              really good) Bash scripts.
            </p>
            <span>
              Imagine, if you could integrate AI into your app itself. Customer
              support bots, generated profile pictures, automated transcription,
              video summaries, and the list goes on.
            </span>
            <br />
            <br />
            Imagine, if you could integrate AI into your app itself. Customer
            support bots, generated profile pictures, automated transcription,
            video summaries, and the list goes on.
          </div>
          {/* div htmlFor description side*/}

          {/* div htmlFor content side*/}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {/* <img
              className="w-full rounded-lg"
              // src={`${courses?.data?.thumbnail}`}
              alt="office content 1"
            /> */}
            <div
              role="status"
              className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
            >
              {/* <div
                htmlFor="course level"
                className="bg-gray-200 animate-pulse w-full h-64 rounded-xlinline-flex items-center "
              > */}
              <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>

            {/* <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
        </svg>
    </div>
    <div className="w-full">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    </div>
    <span className="sr-only">Loading...</span>
</div> */}

            {/* <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/> */}
            <div className="zw-96	animate-pulse bg-gray-200 rounded-r-lg		">
              <h1>Course Content</h1>
              <p>53m • 11 lessons</p>
              <div className="zw-96 animate-pulse bg-blue-gray-400 rounded-r-sm"></div>
              {/* single div of course content */}
              <div className="w-full h-96	 text-gray-900 bg-white  border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {/* {content.map((contents) => (
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
              ))} */}
              </div>
              {/*end of single div*/}
            </div>
          </div>
        </div>
      </section>
    );
  }
  //orginal content
  const enrolled = courses.studentsEnrolled.includes(studentId);
  return (
    <>
    {console.log(lessons,'ha')}
      <section className=" dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          {/* div htmlFor description side*/}
          <div className="bg-white font-light text-black-500 sm:text-md dark:text-gray-400">
            <div>
              <Chip
                className=" text-xs h-5 px-1 max-w-max inline-flex items-center"
                color="green"
                value="PAID"
                size="sm"
              />
            </div>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              {courses?.title}
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
                value={`${courses?.level}`}
                size="sm"
              />
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                ${courses?.price}
              </h2>
            </div>
            {/* <p className="mb-4">{courses?._id}</p> */}
            <div>
              <RazorpayButton
                disabled={enrolled}
                courseId={courses?._id}
                coursePrice={courses?.price}
              >
                Start Watching
              </RazorpayButton>
            </div>
            <h1 className="text-xl">Course Introduction</h1>
            <br />
            <p>
              We are strategists, designers and developers. Innovators and
              problem solvers. Small enough to be simple and quick. But, you
              might get the feeling that you're leaving something on the table.
              That there's more you could be doing with an advanced LLM other t
              han making drop-down menu components, and writing (admittedly
              really good) Bash scripts.
            </p>
            <span>
              Imagine, if you could integrate AI into your app itself. Customer
              support bots, generated profile pictures, automated transcription,
              video summaries, and the list goes on.
            </span>
            <br />
            <br />
            Imagine, if you could integrate AI into your app itself. Customer
            support bots, generated profile pictures, automated transcription,
            video summaries, and the list goes on.
          </div>
          {/* div htmlFor description side*/}

          {/* div htmlFor content side*/}
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src={`${courses?.thumbnail}`}
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
