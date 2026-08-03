import express from "express"
import isAuth from "../middleware/isAuth"
import { addItem, editItem } from "../controller/items.controllers"
import { upload } from "../middleware/multer"



const itemRouter = express.Router()

itemRouter.post("/add-item" ,isAuth,upload.single("image"), addItem)
itemRouter.post("/edit-item/:itemId" ,isAuth,upload.single("image"), editItem)



export default itemRouter