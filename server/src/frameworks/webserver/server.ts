import { Server } from 'http';
// import configKeys from '../../config';

const serverConfig= (server:Server)=>{
        
        const startServer=()=>{
            server.listen(5000,()=>{
                console.log(`Server listening on Port Number 3000`);
            })
        }
        return {
            startServer
        }
}


export default serverConfig;
