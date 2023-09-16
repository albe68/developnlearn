import express,{Application} from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import mongoSanitize from "express-mongo-sanitize";
import configKeys from "../../config";
import dotenv from "dotenv";
dotenv.config();
import compression from "compression";
const expressConfig=(app:Application)=>{
  
    // if(configKeys.NODE_ENV=='development')
    app.use(morgan("dev"));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(cookieParser());
    app.use(mongoSanitize());
    app.use(compression());
    
};


export default expressConfig;
