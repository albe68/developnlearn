import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTags } from "../../../../api/endpoints/course/course";
import FilterComponent from "./filterComponent";
import ShimmerCards from "./shimmer-cards";
import CourseList from "./courses-list";
import { Button } from "@material-tailwind/react";
const CoursesPage = () => {
  const [courses, setCourses] = useState([]); //is,the intial state of courses cards, lazy loading?
  const [tagsstate, setTags] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [isSelected, setSelected] = useState(false);
  const [dataFromChild, setDataFromChild] = useState([]);

  const receiveDataFromChild = (data) => {
    // Update the array in the parent component
    setDataFromChild(data);
  };

  // Callback function to receive filteredCourses data from FilterComponent
  const handleFilteredCourses = (courses) => {
    console.log(courses,'chec')
    setFilteredCourses(courses);
  };
  // const handleFilterCall = (e) => {
  //   const isSelected = e.target.checked;
  //   const filterQuery = e.target.value;
  //   console.log(e.target.value, "check");
  //   setSelected(isSelected);
  //   if (isSelected) {
  //     filterProducts(filterQuery);
  //   }
  // };

  useEffect(() => {
    async function fetchData() {
      try {
        const tags = await getTags();
        setTags(tags);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row">
        {/* <Link to={"/dashboard "} className="ml-4 mt-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className=" w-12 h-12 rounded-full bg-gray-500"
          />
        </Link> */}
        <aside className="w-full md:w-1/5 p-6 md:pl-8 md:pr-4 md:py-6 sm:w-60  dark:bg-gray-900 dark:text-gray-100 border-r md:border-r border-gray-300">
          {/* <nav className="space-y-8 bg-green-100 text-sm">
            <h1 className="mt-4 text-gray-900 text-2xl font-bold">
              Filter Tags
            </h1>

            <ul className=" p-6  w-48  text-sm font-medium text-gray-900 bg-red-100 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              {tagsstate?.map((tagsmap, index) => (
                <FilterComponent
                  sendDataToParent={receiveDataFromChild} //props from child component {FilterCOmponent}
                  key={index}
                  onFilteredCourses={handleFilteredCourses}
                  tagsmap={tagsmap}
                  index={index}
                />
                // <FilterComponent onFilteredCourses={handleFilteredCourses} key={index} tagsmap={tagsmap} index={index} />
              ))}
            <Button className="p-2 mt-2 bg-gradient-to-r from-green-400" size="sm">Filter</Button>

            </ul>

          </nav> */}
          {/*//origin component */}
          <nav className="flex flex-col items-center justify-start text-sm h-screen">
            <div>
              <h1 className="mt-4 text-gray-900 text-2xl font-bold">
                Filter Tags
              </h1>

              <ul className="mt-6 p-6 w-48 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                {tagsstate?.map((tagsmap, index) => (
                  <FilterComponent
                    sendDataToParent={receiveDataFromChild}
                    key={index}
                    onFilteredCourses={handleFilteredCourses}
                    tagsmap={tagsmap}
                    index={index}
                  />
                ))}
                <Button
                  className="p-2 mt-2 bg-gradient-to-r from-green-400"
                  size="sm"
                >
                  Filter
                </Button>
              </ul>
            </div>
          </nav>
        </aside>
        {/* {filteredCourses ? <h1>filteredCourses</h1> : <h1>whole</h1>} */}

        <CourseList filtered={filteredCourses} />
      </div>
    </>
  );
};
export default CoursesPage;
