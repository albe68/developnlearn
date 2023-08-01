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

export const getAllInstructorsService=async(endpoint)=>{
    try{
        const response=await axiosInstance.get(`${endpoint}`)
        return response.data;
    }
    catch(error){
        console.log(error)
    }
}