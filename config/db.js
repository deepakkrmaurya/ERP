import mongoose from 'mongoose'

const dbCOnnection = async()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGOOSE_URI || 'mongodb+srv://deepak:deepak123@cluster0.rafupcb.mongodb.net/erp')
        if(connection){
            console.log("DB Connection Successfully...")
        }
    } catch (error) {
        console.log(error.message)
        process.exit(1);
    }
}

export default dbCOnnection
