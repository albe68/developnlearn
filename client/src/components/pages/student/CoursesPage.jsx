import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { viewCourse } from "../../../api/endpoints/course/course";
import { useNavigate,Link } from "react-router-dom";
import { filterProducts } from "../../../api/endpoints/course/course";
const CoursesPage = () => {
  const navigate = useNavigate();
  const [isSelected,setSelected]=useState(false);
  const handleFilterCall=(e)=>{
    const isSelected=e.target.checked;
    const filterQuery=e.target.value;
    console.log(e.target.value,'check')
    setSelected(isSelected);
    if(isSelected){
      filterProducts(filterQuery)
    }
  }
 
  const navigateHandle = (courseId) => {
  console.log(courseId)
  navigate(`/course/${courseId}`);

  };
  const [courses, setCourses] = useState([]); //is,the intial state of courses cards, lazy loading?
  //  const renderData=async()=>{
  //     const data=await  viewCourse();
  //     setCourses(data);

  //   };
  //   useEffect(
  //     ()=> {renderData()} ,[]);
  //  console.log(courses,"here")
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await viewCourse();
        console.log(data);
        setCourses(data.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-1/4 p-6 md:pl-8 md:pr-4 md:py-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 border-r md:border-r border-gray-300">
        <nav className="space-y-8 text-sm">
          {/* <div className="space-y-2">
			<h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">Getting Started</h2>
			<div className="flex flex-col space-y-1">
				<a rel="noopener noreferrer" href="#">Installation</a>
				<a rel="noopener noreferrer" href="#">Plugins</a>
				<a rel="noopener noreferrer" href="#">Migrations</a>
				<a rel="noopener noreferrer" href="#">Appearance</a>
				<a rel="noopener noreferrer" href="#">Mamba UI</a>
        <div>
        <a rel="noopener noreferrer" href="#">Mamba UI</a>
        <input type="checkbox" value="hi"></input>

        </div>
			</div>
		</div>
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">Dashboard</h2>
			<div className="flex flex-col space-y-1">
				<a rel="noopener noreferrer" href="#">Header</a>
				<a rel="noopener noreferrer" href="#">Drawer</a>
				<a rel="noopener noreferrer" href="#">Page Title</a>
				<a rel="noopener noreferrer" href="#">Menus</a>
				<a rel="noopener noreferrer" href="#">Sidebar</a>
				<a rel="noopener noreferrer" href="#">Footer</a>
			</div>
		</div> */}
          <h1>Topics</h1>
          <ul className="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Vue JS
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="react-checkbox"
                  type="checkbox"
                  value="nodejs"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  onChange={handleFilterCall}
                />
                <label
                  htmlFor="react-checkbox"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  React
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="angular-checkbox"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Angular
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
              <div className="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="laravel-checkbox"
                  className="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Laravel
                </label>
              </div>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="w-full md:w-3/4 p-6 md:py-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            courses.map((course, index) => (
              <Link to={course._id} key={index}>
              <div key={index} className="w-full p-4">
                <Card className="h-48" >
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
            ))
            // Array.from({ length: 9 }).map((_, index) => (
            //             <div key={index} className="w-full p-4">

            //
            //     ))
          }
        </div>
      </div>
    </div>
  );
};
export default CoursesPage;
