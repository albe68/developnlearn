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

export const editCourseService=async(endpoint,editData)=>{
    try{
        const response=await api.patch(`${endpoint}64d315e28e2d878785c8936c`,editData);
        return response.data;

    }
    catch(err){
        console.log("err",err)

    }
}