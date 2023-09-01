import express,{Application,NextFunction} from 'express' ;
import connectToMongoDB from './frameworks/database/mongoDB/connection'
import http from 'http';
import routes from './frameworks/webserver/routes';
import colors from 'colors.ts';
import expressConfig from './frameworks/webserver/express';
import serverConfig from './frameworks/webserver/server';
import AppError from './utils/appError';
import ErrorHandlingMiddleware from './frameworks/webserver/middlewares/error-handling';
colors?.enable();


const app:Application=express();
const server=http.createServer(app);

//connecting MongoDb
connectToMongoDB();
//startting express
expressConfig(app);
//routes
routes(app)
//server
//error handling
app.use(ErrorHandlingMiddleware);
app.all('*',(req,res,next:Function)=>{
    next(new AppError('Not Found',404))
})
serverConfig(server).startServer()




