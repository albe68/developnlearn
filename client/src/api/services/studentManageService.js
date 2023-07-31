import axios from "axios"
const baseURL = 'http://localhost:5000/';

const axiosInstance=axios.create({baseURL})

axiosInstance.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        return Promise.reject(error);
    }
)

export const getAllStudentsService =async(endpoint)=>{
    try{
        const response=await axiosInstance.get(`${endpoint}`)
        console.log(response);
        return response.data
    }catch(err){
        console.log("err",err)
    }
}

export const blockStudentService =async (endpoint,studentId)=>{
    try{
        const response=await axiosInstance.patch(`${endpoint}`);
        console.log(response,"response from server")
        return response.data
    }catch(err){console.log(err)}
}

export const unBlockStudentService =async (endpoint,studentId)=>{
    try{
        const response=await axiosInstance.patch(`${endpoint}`);
        console.log(response,"response from server")
        return response.data
    }catch(err){console.log(err)}
}
