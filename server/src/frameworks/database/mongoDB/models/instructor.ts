import mongoose,{Schema,model} from "mongoose";

interface profilePic{
    name:string;
    key?:string;
    url?:string;
}
const profileSchema= new Schema<profilePic>({
    name:{
        type:String,
        required:true
    },
    key:{
        type:String
    },
    url:{
        type:String
    }
});

const instructorSchema= new Schema({
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
        unique:true,
        lowercase:true
    },
    // profilePic:{
    //     type:profileSchema,
    //     required:true
    // },
    mobileNumber:{
        type:Number,
        required:true,
        match:[/^[0-9]{10}/,"Please enter a valid phone number"],
        unique:true,
        trim:true
    },
    qualification:{
        type:String,
        required:true
    },
    subjects:{
    type:Array<string>,
    required:true
    },
    experience:{
        type:String,
        required:true
    },
    skills:{
        type:String
    },
    about:{
        type:String
    },
    password:{
        type:String,
        required:true,
        minLength:8
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    coursesCreated:[
        {type:mongoose.Schema.Types.ObjectId,
        ref:"Courses"}
    ],isRejected:{
        type:Boolean
    },
    dateRequested:{
        type:Date
    }


});

const Instructor=model("Instructors",instructorSchema,"instructor");
export default Instructor;