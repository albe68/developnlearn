import mongoose from "mongoose";
import configKeys from "../../../config";
mongoose.set("strictQuery",true);
//debugging mongodb queriying
// mongoose.set('debug', { shell: true });

const connectDB= async ()=>{
    try{
        await mongoose.connect(configKeys.MONGO_DB_URL,{ 
            dbName:configKeys.DB_NAME
        });
        console.log("Database connnected successfully".bg_green);
        
    }
    catch(error:any){
        console.log(`${error}`.bg_red);
        process.exit(1);
    }
};
export default connectDB;