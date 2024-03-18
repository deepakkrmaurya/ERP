import { Router } from "express";import { login, register } from "../controllers/user.controller.js";
import { createCourde, getAllCourse } from "../controllers/course.controller.js";

const router=Router();


router.route('/')
.post(createCourde)
.get(getAllCourse)



export default router