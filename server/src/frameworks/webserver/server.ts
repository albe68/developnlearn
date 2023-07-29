import { Server } from 'http';
// import configKeys from '../../config';
console.log(Server)

const serverConfig= (server:Server)=>{
        
        const startServer=()=>{
            server.listen(3000,()=>{
                console.log(`Server listening on Port Number 3000`);
            })
        }
        return {
            startServer
        }
}


export default serverConfig;
