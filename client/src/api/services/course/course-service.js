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



export const viewCourseService= async (endpoint)=>{
    try{
        const courses=await axiosInstance.get(endpoint);
        return courses.data;
    }
    catch(err){
        console.log(err)
    }
}