import User from "../modles/user.model.js";

const register =async (req,res)=>{
    const {fullName,email,mobile,rollNumber,password,course,branch,fatherName,motherName,address}=req.body;
    
    if(!fullName|| !email || !mobile || !rollNumber || !password){
       return res.status(400).json({
            success:false,
            message:"Please provide all the details"
        })
    }

    const verify = await User.findOne({rollNumber})
    if (verify) {
       return res.status(400).json({
            success:false,
            message:"rollNumber ready register."
        })
    }

    const user = await User.create({
        fullName,
        email, 
        mobile,
        rollNumber,
        password,
        course,
        branch,
        fatherName,
        motherName,
        address
    })
    
    if(await user.save()){
       return res.status(200).json({
            success:true,
            message:"Register successfully.."
        })
    }

}

const login = (req,res)=>{
    res.send("login")
}

export {
    register,
    login
}