import app from "./app.js";
import dbCOnnection from "./config/db.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT,async()=>{
    await dbCOnnection()
    console.log("server is runing at localhost:"+PORT)
})