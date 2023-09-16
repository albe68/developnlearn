import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {
  getInstructorsRequests,
  acceptInstructorRequest,
  rejectInstructorRequest,
} from "../../../api/endpoints/auth/instructorManagement";
import useTimeAgo from "../../../hooks/useTimeAgo";
import { Link } from "react-router-dom";
export default function ViewAllInstructorsRequests() {
  const TimeAgo = useTimeAgo();
  const [requests, setRequests] = useState([]);
  const handleApiCall = async () => {
    try {
      const response = await getInstructorsRequests();
      console.log(response.data);
      setRequests(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleApiCall();
  }, []);
  const handleAccept = async (instructorId) => {
    await acceptInstructorRequest(instructorId);
    
  };

  const handleReject = async (instructorId) => {
    await rejectInstructorRequest(instructorId);
  };
  return (
    <>
      <Card className="w-96 content-center ">
        <List>
          {requests.map(
            ({
              _id,
              firstName,
              lastName,
              email,
              mobileNumber,
              qualification,
              subjects,
              experience,
              password,
              isVerified,
              coursesCreated,
              dateRequested,
            }) => (
              <ListItem key={_id}>
                <ListItemPrefix>
                  <Avatar
                    variant="circular"
                    alt="candice"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                  />
                </ListItemPrefix>
                <div>
                  <Typography variant="h6" color="blue-gray">
                    {firstName + " " + lastName}
                  </Typography>
                  <Typography
                    variant="small"
                    color="gray"
                    className="font-normal"
                  >
                    Software Engineer @ Material Tailwind
                  </Typography>
                  <Button onClick={() => handleAccept(_id)}>Accept</Button>
                  <Button onClick={() => handleReject(_id)}>Reject</Button>

                  <p>{TimeAgo(dateRequested)}</p>
                </div>
              </ListItem>
            )
          )}
        </List>
      </Card>
      <Link to={"/admin/instructors/rejected-instructors"}>
        <Button>Rejected Instructors </Button>
      </Link>
    </>
  );
}
