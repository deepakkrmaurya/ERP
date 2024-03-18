import mongoose from 'mongoose'

const dbCOnnection = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGOOSE_URI)
        if(connection){
            console.log("DB Connection Successfully...")
        }
    } catch (error) {
        console.log(error.message)
        process.exit(1);
    }
}

export default dbCOnnection