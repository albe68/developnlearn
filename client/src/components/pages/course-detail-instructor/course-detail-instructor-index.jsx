import React from 'react'
import { CouseDetailCard } from './course-detail-instructor-card'
import { CourseDetailRightSide } from './course-detail-instructor-right-side'
export default function CouseDetailIndexPage() {
  return (
    <div className='flex'>
     <CouseDetailCard/>
    <CourseDetailRightSide/>
    </div>
   
  )
}
