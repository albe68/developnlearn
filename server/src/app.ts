import express,{Application,NextFunction} from 'express' ;
import connectToMongoDB from './frameworks/database/mongoDB/connection'
import http from 'http';
import routes from './frameworks/webserver/routes';
import colors from 'colors.ts';
import expressConfig from './frameworks/webserver/express';
import serverConfig from './frameworks/webserver/server';

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

serverConfig(server).startServer()




