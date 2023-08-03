import express,{Application} from 'express';
import cors from 'cors'
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import configKeys from '../../config';
import dotenv from 'dotenv'
dotenv.config();

const expressConfig=(app:Application)=>{
    console.log( 
    process.env.CONSOLE,"hello"

     )
    console.log(configKeys.test,"for a test")
    // if(configKeys.NODE_ENV=='development')
    app.use(morgan('dev'));
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended:true}));
    app.use(cookieParser());
    app.use( helmet.contentSecurityPolicy({
        directives:{
            imgSrc:["'self'",'data:'],
            frameSrc:["'self'",'https:']
        }
    })
    
        
    )
}


export default expressConfig;
