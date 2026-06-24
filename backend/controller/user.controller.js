import User from '../models/usermodel.js'

export const getCurrentUser = async(req, res) =>{
    try {
        const userId = req.userId
        if(!userId){
              response.status(400).json({message : "userId not found"})
        }
        const user = await User.findById(userId)
         if(!user){
              response.status(400).json({message : "user not found"})
        }
        return res.status(200).json(user)
    } catch (error) {
         response.status(500).json({message : "get current user error"})
    }
}