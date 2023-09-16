import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { viewCourse } from "../../../../api/endpoints/course/course";
import { Link } from "react-router-dom";
import ShimmerCards from "./shimmer-cards";
const CoursesPage = (props) => {
  console.log(props, "success");
  const [courses, setCourses] = useState([]); //is,the intial state of courses cards, lazy loading?
  const [isLoading, setIsLoading] = useState(true);
  const [dataFromChild, setDataFromChild] = useState([]);
  const [filtered, setfiltered] = useState([]);
  // setfiltered(props);
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await viewCourse();
        setCourses(data?.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      } catch (error) {
        console.error("Error fetching course data:", error);

        setIsLoading(false);
      }
    }

    fetchData();
  }, []);
  if (isLoading) {
    return (
      <div className="w-full md:w-3/4 p-6 md:py-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[...Array(8)].map((_, index) => (
            <ShimmerCards key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full md:w-3/4 p-6 md:py-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {courses?.map((course, index) => (
            <Link to={course._id} key={index}>
              <div key={index} className="w-full p-4">
                <Card className="h-48">
                  <CardBody className="flex items-center ">
                    <img
                      src={course.thumbnail}
                      className="w-16 h-16 rounded-full mr-4"
                      alt="course"
                    />
                    <div>
                      <Typography className="mt-11">{course.title}</Typography>
                      <div className="flex items-center mt-2">
                        <img
                          src="https://d2eip9sf3oo6c2.cloudfront.net/instructors/avatars/000/000/567/original/Twitter_Pic.jpeg"
                          className="w-8 h-8 rounded-full mr-2"
                          alt="Contributor"
                        />
                        <Typography color="gray" className="text-xs">
                          Ben Patton
                        </Typography>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export default CoursesPage;
