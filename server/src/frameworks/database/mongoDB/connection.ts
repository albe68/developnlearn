import mongoose from 'mongoose';
import configKeys from "../../../config"
mongoose.set("strictQuery",true);

const connectDB= async ()=>{
    try{
        await mongoose.connect('mongodb://0.0.0.0:27017/',{ 
            dbName:"developlearn"
        });
        console.log(`Database connnected successfully`.bg_green);
        
    }
    catch(error:any){
        console.log(`${error}`.bg_red);
        process.exit(1);
    }
}
export default connectDB;