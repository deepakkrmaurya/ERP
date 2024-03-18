import { Schema, model } from "mongoose";

const userSchema = new Schema(
    {
      fullName:{
        type: String, 
        
      },
      email:{
        type: String, 
        
      },
      mobile:{
        type: String, 
        
      },
      rollNumber:{
        type: String, 
        
      },
      password:{
        type: String, 
        
      },
      course:{
        type: String, 
      },
      branch:{
        type: String, 
      },
      fatherName:{
        type: String, 
      },
      motherName:{
        type: String, 
      },
      address:{
        type: String, 
      },
      role:{
        type:String,
        enum:['USER','ADMIN','SUPER_ADMIN'],
        default:"USER"
      }

    },
    { timestamps: true });


    const User = model('User',userSchema);

    export default User;