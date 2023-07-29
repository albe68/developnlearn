import HttpStatusCode from "../../src/constants/httpStatusCode"

class AppError extends  Error{
    statusCode:number;
    status:string;
    isOperational:boolean;
    keyValue:any;

    constructor(message:string,statusCode:HttpStatusCode){
        super(message);
        this.statusCode=statusCode;
        this.status=`${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational=true;
        Error.captureStackTrace(this,this.constructor); 
    }
}
export default AppError;