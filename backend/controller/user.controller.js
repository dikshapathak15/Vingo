import User from '../models/usermodel.js'

export const getCurrentUser = async(req, res) =>{
    try {
        const userId = req.userId
        console.log("req.userId= ", req.userId);
        if(!userId){
             return  res.status(400).json({message : "userId not found"})
        }
        const user = await User.findById(userId)
        console.log("user= ", user)
         if(!user){
             return res.status(400).json({message : "user not found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json({message : "get current user error"})
    }
}