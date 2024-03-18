import Course from "../modles/course.model.js";

const createCourde = async(req,res)=>{
    const {course,branch}= req.body;
    if(!course || !branch){
        return res.status(400).json({
            success:false,
            message:"All fields are required.."
        })
    }

    const cour = await Course.create({
        course,
        branch
    })
    if(await cour.save()){
        return res.status(200).json({
            success:true,
            message:"course create successfully.."
        })
    }
}

const getAllCourse = async(req,res)=>{
   const courselist = await Course.find()
   return res.status(200).json({
    success:true,
    courselist
})
}

export {
    createCourde,
    getAllCourse
}