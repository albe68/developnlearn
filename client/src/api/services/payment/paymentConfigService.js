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
);

export const getConfigService=async(endpoint)=>{
    try{
        const response= await axiosInstance.get(`${endpoint}`);
        return response.data;
    }
    catch(err){console.log(err)}

}

export const createStripePaymentService=async(endpoint,courseId)=>{
    try{
        const response= await axiosInstance.post(`${endpoint}`,{
            courseId
        });
        return response.data;
    }
    catch(err){
        console.log(err)
    }
}

export const razorPaymentService=async(endpoint,amount)=>{
    try{
        const response=await axiosInstance.post(`${endpoint}`,{
            amount
        });
        console.log("checked")
        return response.data;
    }
    catch(err){
        console.log(err)
    }
}

export const captureRZpService=async(endpoint)=>{
    try{
        const response=await axiosInstance.post(`${endpoint}`);
        return response.data;
    }
    catch(err){
        console.log(err)
    }
}



export const enrollStudentService=async(endpoint,courseId,paymentInfo)=>{
    try{
        const response=await axiosInstance.post(`${endpoint}/${courseId}`,{paymentInfo});
        return response.data;
    }
    catch(err){
        console.log(err)
    }
}

