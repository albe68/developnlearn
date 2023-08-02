import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   
 const CoursesPage=()=> {
    return (
        <Card className="mt-6 w-80 h-48">
        <CardBody className="flex items-center ">
          <img
            src="https://egghead.io/_next/image?url=https%3A%2F%2Fd2eip9sf3oo6c2.cloudfront.net%2Fplaylists%2Fsquare_covers%2F000%2F987%2F431%2Fthumb%2Fsveltekit-logo.png&w=256&q=100"
            className="w-16 h-16 rounded-full mr-4"
            alt="Profile"
          />
          <div>
            <Typography className="mt-11">
              Build a Chat App Using Svelte and Node.js
            </Typography>
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
      )
  }
  export default CoursesPage;