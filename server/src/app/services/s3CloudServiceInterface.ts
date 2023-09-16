import { CloudServiceImpl } from "../../frameworks/services/s3Sevice";

export const CloudServiceRepo = (service: ReturnType<CloudServiceImpl>) => {

const addObject = async (files:Express.Multer.File) => await service.uploadObject(files);

const getObject = async (fileKey:string)=> await service.getObject(fileKey);

const getcloudFrontUrl=async ()=> await service.getcloudFrontUrl();

return{
    addObject,
    getObject
}
};

export type CloudServiceInterface = typeof CloudServiceRepo;




