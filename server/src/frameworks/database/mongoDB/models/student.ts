import mongoose,{Schema,model,Document} from "mongoose";

interface profilePic{
        name:string;
        key?:string;
        url?:string;
}

interface Istudent extends Document{
        firstName:string;
        lastName:string;
        email:string;
        profilePic:profilePic;
        mobile?:string;
        password?:string;
        intrests:Array<string>;
        coursesEnrolled:mongoose.Schema.Types.ObjectId[];
        dateJoined:Date;
        isGoogleUser:boolean;
}

const studentSchema= new Schema <Istudent>({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        },
    mobile:{
        type:String,
        
    },
    password:{
        type:String,

    }
})

const Students = model<Istudent>('Students',studentSchema,'students');

export default Students;    