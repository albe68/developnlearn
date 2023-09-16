import { Application } from "express";
import authRouter from "./auth";
import studentRouter from "./students";
import instructorRouter from "./instructors";
import courseRouter from "./course";
import paymentRouter from "./payment";
import refreshRouter from "./refresh";
import jwtAuthMiddleware from "../middlewares/userAuth";
const routes=(app:Application)=>{
    app.use("/api/auth",authRouter());
    app.use("/api/all/refresh-token",refreshRouter());
    app.use("/api/students",studentRouter());
    app.use("/api/instructors",instructorRouter());
    app.use("/api/course",courseRouter());
    app.use("/api/payment",jwtAuthMiddleware,paymentRouter());
};

export default routes;
