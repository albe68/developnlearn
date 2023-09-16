// import axiosInstance from "../middlewares/test";
// import api from "../middlewares/protected-interceptor";
import axiosInstance from "../../api/middlewares/interceptors";
import api from "../../api/middlewares/test"


export const getAllInstructorsService=async(endpoint)=>{
    try{
        const response=await axiosInstance.get(`${endpoint}`)
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}

export const acceptInstructorRequestService=async(endpoint,instructorId)=>{
    try{
        await axios.patch(`${endpoint}${instructorId}`)
    }
    catch(err){
        console.log(err)
    }
}


export const rejectInstructorRequestService=async(endpoint,instructorId)=>{
    try{
        await axios.patch(`${endpoint}${instructorId}`)
    }
    catch(err){
        console.log(err)
    }
}

export const rejectedInstructorsService=async(endpoint)=>{
    try{
      const response=  await axiosInstance.get(`${endpoint}`)
        return response.data
    }
    catch(err){
        console.log(err)
    }
}