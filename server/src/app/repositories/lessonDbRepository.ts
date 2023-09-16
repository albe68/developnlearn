import { LessonDbMongoInterface } from "@src/frameworks/database/mongoDB/repositories/lessonRepoMongoDB";

export const lessonDbRepository = (
  repository: ReturnType<LessonDbMongoInterface>
) => {
  
 const getLessonByID = async (courseId: string) =>await repository.getLessonByID(courseId);

 

  return {
    getLessonByID,
  };
};

export type LessonDbInterface = typeof lessonDbRepository;
