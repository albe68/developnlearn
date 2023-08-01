import { Application } from "express";
import authRouter from './auth'
// import refreshRouter from "./refresh";
import studentRouter from "./students";
import instructorRouter from "./instructors"
const routes=(app:Application)=>{
    app.use('/api/auth',authRouter());
    // app.use('/api/all/refresh-token',refreshRouter());
    app.use('/api/students',studentRouter())
    app.use('/api/instructors',instructorRouter())
    
}

export default routes;
