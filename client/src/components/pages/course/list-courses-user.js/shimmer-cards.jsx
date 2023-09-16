import React from 'react'

export default function ShimmerCards() {
  return (
<div className="bg-white p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
      <div className="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse" ></div>
      <div className="flex flex-col flex-1 gap-5 sm:p-2">
        <div className="flex flex-1 flex-col gap-3">
          <div className="bg-gray-200 w-full animate-pulse h-14 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
          <div className="bg-gray-200 w-full animate-pulse h-3 rounded-2xl" ></div>
        </div>
        <div className="mt-auto flex gap-3">
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full" ></div>
          <div className="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto" ></div>
        </div>
      </div>
</div>
  )
}

{/* <Link to={course._id} key={index}>
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
</Link> */}