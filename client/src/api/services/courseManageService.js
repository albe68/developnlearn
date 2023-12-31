import axiosInstance from "../middlewares/test";
import api from "../middlewares/test";



export const addCourseService =async(endpoint,courseData)=>{
    try{
        return await api.post(`${endpoint}`,courseData)
    }catch(err){
        console.log("err",err)
    }
}

export const allCoursesService=async(endpoint)=>{
    try{
        const response= await api.get(`${endpoint}`)
        return response.data;
        
    }
    catch(err){
        console.log("err",err)

    }
}

export const editCourseService=async(endpoint,editData,courseId)=>{
    try{
        const response=await axiosInstance.patch(`${endpoint}64d315e28e2d878785c8936c`,editData);
        return response.data;

    }
    catch(err){
        console.log("err",err)

    }
}