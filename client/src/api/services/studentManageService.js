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

export const getAllStudentsService =async(endpoint)=>{
    try{
        const response=await api.get(`${endpoint}`)
        return response.data
    }catch(err){
        console.log("err",err)
    }
}

export const blockStudentService =async (endpoint,studentId)=>{
    try{
        const response=await api.patch(`${endpoint}`);
        return response.data
    }catch(err){console.log(err)}
}

export const unBlockStudentService =async (endpoint,studentId)=>{
    try{
        const response=await api.patch(`${endpoint}`);
        return response.data
    }catch(err){console.log(err)}
}
