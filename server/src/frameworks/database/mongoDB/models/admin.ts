import  { Schema,model } from "mongoose";

const adminSchema= new Schema ({
    email:{
        type:String,
       },
    password:{
        type:String,
        
    }
});

const Admin= model("Admin",adminSchema,"admin");
export default Admin;
