import {
    List,
    ListItem,
    ListItemPrefix,
    Avatar,
    Card,
    Typography,
    Button
  } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { getInstructorsRequests,
  acceptInstructorRequest,
  rejectInstructorRequest } from "../../../api/endpoints/auth/instructorManagement";
   
  export default function ViewAllInstructorsRequests() {
    const [requests,setRequests]=useState([]);
    const handleApiCall=async()=>{
        try{
          const response=  await getInstructorsRequests();
          console.log(response.data)
          setRequests(response.data)
        }catch(err){console.log(err)}
    };

    useEffect(
        ()=>{
            handleApiCall()
        },[])
       const handleAccept=async(instructorId)=>{
        await acceptInstructorRequest(instructorId);
       } 

       const handleReject=async(instructorId)=>{
        await rejectInstructorRequest(instructorId)
       }
    return (
        
      <Card className="w-96 content-center ">
        <List >
        {requests.map(({_id,firstName,lastName})=>(  
    <ListItem key={_id}>
            <ListItemPrefix>
              <Avatar variant="circular" alt="candice" src="/img/face-1.jpg" />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
              {firstName+" "+lastName}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Software Engineer @ Material Tailwind
              </Typography>
              <Button  onClick={()=>handleAccept(_id)}>
      Accept
    </Button>
    <Button  onClick={()=>handleReject(_id)}>
      Reject
    </Button>
            </div>
          </ListItem>))
}        
         
          
        </List>
      </Card>
    );
  }