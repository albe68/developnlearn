import { CloudServiceInterface } from "@src/app/services/s3CloudServiceInterface";

export const watchLessonU = (
  cloudRepository: ReturnType<CloudServiceInterface>,
  fileKey:string
) => {  

       const url= cloudRepository.getObject("44ce0f22d01784dbbbe27b28d0b28cdfaef369e2026adee60a162a6c29970e33");
       return url;
    };
