import mongoose from "mongoose";

const refreshTokenSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true
    }
    ,token:{
        type:String,
        required:true
    },
    expiresAt:{
        type:Date,
        required:true
    }

})
const refreshToken=mongoose.model('RefreshToken',refreshTokenSchema);
 export default refreshToken;