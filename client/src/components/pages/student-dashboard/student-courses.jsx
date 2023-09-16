import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { enrolledCourses } from "../../../api/endpoints/course/course";
export default function Studentcourses() {
  
  const [fetched, setfeteched] = useState([]);
  const fetchCourses = async () => {
    const response = await enrolledCourses();
    setfeteched(response);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="m-40 grid grid-cols-3 gap-4 ">
      {fetched.map((course, index) => (
        <div key={index} className="max-w-xs mx-auto ">
          <Card className="h-64 w-64 flex flex-col">
            {" "}
            {/* Set fixed height and width */}
            <CardBody className="flex items-center">
              <img
                src={course.thumbnail}
                className="w-16 h-16 rounded-full mr-4"
                alt="course"
              />
              <div className="flex-grow overflow-hidden">
                {/* <Typography className="mt-11"> */}
                <div className="h-20 overflow-hidden">
                  {" "}
                  {/* Set a fixed height */}
                  <Typography className="line-clamp-3">
                    {" "}
                    {/* Please adjust the number in line-clamp-3 as needed to control the number of lines you want to display before adding an ellipsis.Use overflow and height classes */}
                    {course.title}
                  </Typography>
                </div>
                <div className="flex items-center mt-2">
                  <img
                    src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/567/original/Twitter_Pic.jpeg"
                    className="w-8 h-8 rounded-full mr-2"
                    alt="Contributor"
                  />
                  <Typography color="gray" className="text-xs">
                    {course.level}
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      ))}
    </div>
  );
}
