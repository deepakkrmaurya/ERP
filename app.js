import express from 'express'
const app = express()
import cors from 'cors'
import { config } from 'dotenv'
config()
app.use(express.json()) 
app.use(cors())


import userRouter from './routers/user.router.js'
import courseRouter from './routers/course.router.js'
app.use('/api/v1/user',userRouter)
app.use('/api/v1/addcourse',courseRouter)
app.use('/',(req,res)=>{
    res.send("Hello World")
})
export default app
