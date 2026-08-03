import express from "express"
import { createEditShop, getMyShop } from "../controller/shop.controllers"
import isAuth from "../middleware/isAuth"
import { upload } from "../middleware/multer"



const shopRouter = express.Router()

shopRouter.post("/create-edit" ,isAuth,upload.single("image"), createEditShop)
shopRouter.get("/get-my" ,isAuth,getMyShop)



export default shopRouter