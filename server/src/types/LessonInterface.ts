export interface AddLessonInterface {
  _id: string;
  title: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  instructorId: string;
  courseId: string;
  medias:{name:string,key:string} [];
}
