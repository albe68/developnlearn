import HttpStatusCode from "../../src/constants/httpStatusCode";

class AppError extends  Error{
    statusCode:number;
    status:string;
    isOperational:boolean;
    keyValue:any;

    constructor(message:string,statusCode:HttpStatusCode){
        // console.log("ERROR START".bg_white,`${message}`.bg_red,"ERROR END".bg_white);
        console.log(
            `error status message: `+`${message}`.bg_white
        );
        super(message);
        this.statusCode=statusCode;
        this.status=`${statusCode}`.startsWith("4") ? "fail" : "error";
        this.isOperational=true;
        Error.captureStackTrace(this,this.constructor); 
    }
}
export default AppError;