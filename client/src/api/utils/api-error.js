export const ApiError=(error)=>{
    if(error.response){
        const status=error.response.status;
        const errorMessage=error.response.data.message;
        
    }
}