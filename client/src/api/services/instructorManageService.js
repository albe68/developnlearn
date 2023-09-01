// import axios from "axios"
import api from "../middlewares/interceptors";


// const baseURL = 'http://localhost:5000/';

// const axiosInstance=axios.create({baseURL})

// axiosInstance.interceptors.response.use(
//     (response)=>{
//         return response;
//     },
//     (error)=>{
//         return Promise.reject(error);
//     }
// )

export const getAllInstructorsService=async(endpoint)=>{
    try{
        const response=await api.get(`${endpoint}`)
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}

export const acceptInstructorRequestService=async(endpoint,instructorId)=>{
    try{
        await api.patch(`${endpoint}${instructorId}`)
    }
    catch(err){
        console.log(err)
    }
}


export const rejectInstructorRequestService=async(endpoint,instructorId)=>{
    try{
        await api.patch(`${endpoint}${instructorId}`)
    }
    catch(err){
        console.log(err)
    }
}

export const rejectedInstructorsService=async(endpoint)=>{
    try{
      const response=  await api.get(`${endpoint}`)
        return response.data
    }
    catch(err){
        console.log(err)
    }
}