import mongoose,{Schema,model} from 'mongoose'
//INTERFACE type not added for this lesson schema
const lessonSchema= new Schema ({
   
    lesson_name:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    instructorId:{
        type:mongoose.Types.ObjectId,
        ref:'instructors',
        // required:true
    },
    courseId:{
        type:mongoose.Types.ObjectId,
        ref:'courses',
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default: Date.now,

    },
    updatedAt:{
        type:Date,

        required:true,
        default: Date.now,

    },
    medias:{
        type:Array
    }
});

const Lessons = model('Lesson',lessonSchema,'lessons');
export default Lessons;