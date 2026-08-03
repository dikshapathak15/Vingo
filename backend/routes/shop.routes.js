import express from "express"
import { createEditShop } from "../controller/shop.controllers"
import isAuth from "../middleware/isAuth"



const shopRouter = express.Router()

shopRouter.get("/create-edit" ,isAuth, createEditShop)



export default shopRouter