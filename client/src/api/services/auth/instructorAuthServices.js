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
export const login =async(endpoint,data)=>{
    try{
        const response=await axiosInstance.post(`${endpoint}`,data);
        return response;
    }catch(error){
        return Promise.reject(error);

    }
}