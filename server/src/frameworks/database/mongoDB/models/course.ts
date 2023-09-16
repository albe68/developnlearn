import mongoose, { Schema, model } from "mongoose";

const courseSchema = new Schema({
  
  title: {
    type: String,
    required: true,
  },
  instructorId:{
    type:String,
    required:true
  },
  duration: {
    type: Number,
    required: true,
  },
  level: {
    type: String,
    required: true,
  },
  tags: {
    type: Array<string>,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirements: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  isDeleted: {
    type: Boolean,
  },
  studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: "students" }],
  completionStatus: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  videos:{
    type:String,

  }
});

const Course = model("Courses", courseSchema, "course");

export default Course;
