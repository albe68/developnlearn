export interface AddCourseDetailsInterface {
  title: string;
  duration: number;
  level: string;
  tags: string[] | string;
  description: string;
  requirements: string;
  price: string;
  instructorId: string;
  videos:string
}
//there is a doubt between studentsEnrolled and coursesEnrolled
export interface CourseInterface extends AddCourseDetailsInterface {
  studentEnrolled: Array<string>;
  thumbnailUrl: string;
}
export interface SavedCourseDetailsInterface {
  title: string;
  duration: number;
  level: string;
  tags: string[] | string;
  description: string;
  requirements: string;
  price: string;
}
