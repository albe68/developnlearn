import mongoose,{ Schema,model } from "mongoose";

const courseSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true

    },
    level:{
        type:String,
        required:true

    },
    tags:{
        type:Array<string>,
        required:true

    },
    description:{
        type:String,
        required:true

    },
    requirements:{
        type:String,
        required:true

    },
    price:{
        type:Number,
        required:true

    }
})

const Course=model("Courses",courseSchema,"course");

export default Course;