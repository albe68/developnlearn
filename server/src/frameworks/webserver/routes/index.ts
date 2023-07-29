import { Application } from "express";
import authRouter from './auth'
// import refreshRouter from "./refresh";
import studentRouter from "./students";

const routes=(app:Application)=>{
    app.use('/api/auth',authRouter());
    // app.use('/api/all/refresh-token',refreshRouter());
    app.use('/api/admin',studentRouter())
    
}

export default routes;
