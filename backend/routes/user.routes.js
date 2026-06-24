import express from "express"
import { getCurrentUser } from "../controller/user.controller.js"
import isAuth from "../middleware/isAuth.js"


const userRouter = express.Router()

authRouter.get("/current" ,isAuth, getCurrentUser)



export default userRouter