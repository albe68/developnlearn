import {v2 as cloudinary} from "cloudinary";
import multer from "multer";
import { RequestHandler } from "express";
import cloudinaryStorage, { CloudinaryStorage } from "multer-storage-cloudinary";
import configKeys from "../../config";
//cloudinary config

cloudinary.config({
    cloud_name:configKeys.CLOUD_NAME,
    api_key:configKeys.CLOUD_KEY,
    api_secret:configKeys.CLOUD_SEC,
});

//config upload files

function configMulter(field:string,limit:number,resource_type:string,allowed_format:string[]): RequestHandler{
    const storageOptions={
        cloudinary:cloudinary,
        params:{
            resource_type:resource_type,
            allowed_format:allowed_format,
            folder:"developnlearn"
        }
    };
    
    const storage=new CloudinaryStorage(storageOptions);
    return multer({storage:storage}).array(field,limit);
}

// function uploadImage()=>{
//     const resource_type='image';
//     const allowed_format=['jpg','jpeg','png'];
//     const storageOptions={
//         cloudinary:cloudinary,
//         params:{
//             resource_type:resource_type,
//             allowed_format:allowed_format,
//             folder:'developnlearn'
//         }
//     }; 
    

// }
function configImageMulter(field:string,limit:number):RequestHandler{
    const resource_type="image";
    const allowed_format=["jpg","jpeg","png"];
    return configMulter(field,limit,resource_type,allowed_format);
}
function configMultipleFiles(field:string,limit:number):RequestHandler{
    const resource_type="video";
    const allowed_format=["mp4","mov"];
    return configMulter(field,limit,resource_type,allowed_format);

}

function cloudFile(field:string,limit:number):RequestHandler{
    const resource_type="video";
    const allowed_format=["mp4","mov"];
    return configMulter(field,limit,resource_type,allowed_format);

}


export const uploadSingleImage:RequestHandler=configImageMulter("image",1);
export const uploadMultipleVideos:RequestHandler=configMultipleFiles("videos",5);

