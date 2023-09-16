import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
  // LockOpenIcon,
  UserPlusIcon,
  // NoSymbolIcon,
  // LockClosedIcon,
  TrashIcon,
  ArrowPathIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  // Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  // IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { allCourses } from "../../../api/endpoints/auth/courseManagement";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { removeCourse } from "../../../api/endpoints/course/course";

const TABS = [
  {
    label: "Courses",
    value: "all",
  },
  // {
  //   label: "Blocked",
  //   value: "monitored",
  // },
];

const TABLE_HEAD = ["Cours Name", "Duration", "Tags", "Actions", ""];
const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];
import { restoreCourse } from "../../../api/endpoints/course/course";
export default function ListCourses({ updated, setUpdated }) {
  const [courses, setCourses] = useState([]);
  // const [open, setOpen] = useState(false);
  // const [id, setId] = useState("");
  // const navigate = useNavigate();
  const fetchCourses = async () => {
    try {
      const response = await allCourses();
      setCourses(response?.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCourses();
  }, [updated]);
  const removeCourse1 = async (_id) => {
    console.log("tried");

    try {
      const response = await removeCourse(_id);
      toast.success(response);

      setUpdated(!updated);
    } catch (err) {
      console.log(err);
    }
  };
  const restoreCourse1 = async (_id) => {
    try {
      const response = await restoreCourse(_id);
      toast.success(response);

      setUpdated(!updated);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Courses
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all Courses
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" color="blue-gray" size="sm">
              view all
            </Button>
            <Link
              to="/instructors/add-course"
              className="flex items-center gap-3"
              color="blue"
              size="sm"
            >
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add Course
            </Link>
          </div>
        </div>

        {
          // This is a single-line comment in JSX
        }
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>

      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {courses.map(
              (
                {
                  thumbnail,
                  _id,
                  title,
                  duration,
                  level,
                  tags,
                  isDeleted,
                  // description,
                  // requirements,
                  // price,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={_id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={thumbnail} alt={""} size="sm" />
                        <div className="flex flex-col">
                          <Link to={`/instructors/course-detail-index/${_id}`}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {title}
                            </Typography>
                          </Link>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {_id}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {duration} min
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {level}
                        </Typography>
                      </div>
                    </td>
                    {/* <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={isBlocked ? "disabled" : "enabled"}
                        color={isBlocked ? "red" : "green"}
                      />
                    </div>
                  </td> */}
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {tags}
                      </Typography>
                    </td>
                    <td className={classes}>
                      {isDeleted ? (
                        <Tooltip content="Remove Course">
                          <Button
                            variant="text"
                            color="blue-gray"
                            onClick={() => restoreCourse1(_id)}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </Button>
                        </Tooltip>
                      ) : (
                        <Tooltip content="Restore Course">
                          <Button
                            variant="text"
                            color="blue-gray"
                            onClick={() => removeCourse1(_id)}
                          >
                            <ArrowPathIcon className="h-4 w-4" />
                          </Button>
                        </Tooltip>
                      )}
                      <Link to={`/instructors/edit-courses/${_id}`}>
                        <Tooltip content="Edit Course">
                          <Button variant="text" color="blue-gray">
                            <CreditCardIcon className="h-4 w-4" />
                          </Button>
                        </Tooltip>
                      </Link>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>

      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" color="blue-gray" size="sm">
            Previous
          </Button>
          <Button variant="outlined" color="blue-gray" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
