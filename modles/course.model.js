import { Schema, model } from "mongoose";

const courseSchema = new Schema(
    {
      course:{
        type: String, 
        
      },
      branch:{
        type: String, 
        
      }
    },
    { timestamps: true });


    const Course = model('Course',courseSchema);

    export default Course;