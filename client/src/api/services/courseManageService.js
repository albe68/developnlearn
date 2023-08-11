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

export const addCourseService =async(endpoint,courseData)=>{
    try{
        return await axiosInstance.post(`${endpoint}`,courseData)
    }catch(err){
        console.log("err",err)
    }
}

export const allCoursesService=async(endpoint)=>{
    try{
        const response= await axiosInstance.get(`${endpoint}`)
        return response.data;
        
    }
    catch(err){
        console.log("err",err)

    }
}

export const editCourseService=async(endpoint)=>{
    try{
        const response=await axiosInstance.get(`${endpoint}`);
        return response.data;

    }
    catch(err){
        console.log("err",err)

    }
}