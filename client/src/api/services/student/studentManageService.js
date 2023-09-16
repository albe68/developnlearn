import axiosInstance from "../../middlewares/test";
// import api from "../../middlewares/protected-interceptor";
import api from "../../middlewares/test"


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
};

export const SingleStudentDetailService =async (endpoint,studentID)=>{
    try{
        const response=await api.get(`${endpoint}/${studentID}`);
        return response.data
    }catch(err){console.log(err)}
};

export const updateProfileService =async (endpoint,studentPayload,studentId)=>{
    try{
        const response=await api.patch(`${endpoint}/${studentId}`,{studentPayload});
        return response.data
    }catch(err){console.log(err)}
};

export const enrolledStudentsService =async (endpoint,courseId)=>{
    try{
        const response=await api.get(`${endpoint}/${courseId}`);
        return response.data
    }catch(err){console.log(err)}
};


