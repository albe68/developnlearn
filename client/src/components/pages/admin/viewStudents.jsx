import { MagnifyingGlassIcon, ChevronUpDownIcon } from "@heroicons/react/24/outline";
import { LockOpenIcon, UserPlusIcon,NoSymbolIcon,LockClosedIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
  
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getAllStudents,unblockStudent,blockStudent } from "../../../api/endpoints/auth/studentManagement";
import {toast} from 'react-toastify'
const TABS = [
  {
    label: "Students",
    value: "all",
  },
  {
    label: "Blocked",
    value: "monitored",
  },
];
 
const TABLE_HEAD = ["Student", "Function", "Status", "Employed", ""];
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
export default function ViewStudents({updated,setUpdated}) {
  const [students,setStudents]=useState([]);
  // const [open,setOpen]=useState(false);
  // const[id,setId]=useState("");
  const fetchStudents=async()=>{
   try{ const response=await getAllStudents();
    setStudents(response?.data);
  }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{fetchStudents()},[updated])
  const handleUnblock=async(_id)=>{
    console.log("tried")

    try{
    const response=  await unblockStudent(_id)
      toast.success(response.message)

      setUpdated(!updated)  
    }catch(err){
      console.log(err)
    }
  }
  const handleBlock=async(_id)=>{
   try {
    const response= await blockStudent(_id);
    toast.success(response.message)

     setUpdated(!updated)  

    
    }catch(err){consolelog(err)}
  }

    return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Active Students
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" color="blue-gray" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" color="blue" size="sm">
              <UserPlusIcon strokeWidth={2} className="h-4 w-4" /> Add member
            </Button>
          </div>
        </div>

{  // This is a single-line comment in JSX
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
            <Input label="Search" icon={<MagnifyingGlassIcon className="h-5 w-5" />} />
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
            {students.map(({ img,_id, email, firstName, lastName, mobile, isBlocked, date }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
              return (
                <tr key={_id}>
                  <td className={classes}>
                    <div className="flex items-center gap-3"> 
                      <Avatar src={img} alt={"img"} size="sm" />
                      <div className="flex flex-col">
                        <Typography variant="small" color="blue-gray" className="font-normal">
                          {firstName+" "+lastName}
                        </Typography>
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
                      <Typography variant="small" color="blue-gray" className="font-normal">
                        {email}
                      </Typography>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal opacity-70"
                      >
                        {email}
                      </Typography>
                    </div>
                  </td>
                  <td className={classes}>
                    <div className="w-max">
                      <Chip
                        variant="ghost"
                        size="sm"
                        value={isBlocked ? "disabled" : "enabled"}
                        color={isBlocked ? "red" : "green"}
                      />
                    </div>
                  </td>
                  <td className={classes}>
                    <Typography variant="small" color="blue-gray" className="font-normal">
                      {mobile}
                    </Typography>
                  </td>
                  <td className={classes}>
                    {
                       isBlocked?( <Tooltip content="UnBlock user">
                         <Button variant="text" color="blue-gray" onClick={()=>handleUnblock(_id)}>
                           <LockClosedIcon className="h-4 w-4" /> 
                         </Button>
                       </Tooltip>):(
                        <Tooltip content="Block user">
                        <Button variant="text" color="blue-gray" onClick={()=>handleBlock(_id)}  >
                          <LockOpenIcon className="h-4 w-4" />
                          
                        </Button>
                      </Tooltip>
                       )
                    }
                 
                  </td>
                </tr>
              );
            })}
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
  )
}
