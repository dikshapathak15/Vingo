import jwt from "jsonwebtoken"

const isAuth = async(req,res, next) =>{
    try {
        const token = req.cookies.token
        if(!token){
            response.status(400).json({message : "token not found"})
        }
        const decodeToken = jwt.verify(token,process.env.JWT_SECRET)
        if(!decodeToken){
              response.status(400).json({message : "TOKEN NOT VERIFIED"})
        }
        console.log(decodeToken)
        req.userId = decodeToken.userId
    } catch (error) {
          response.status(500).json({message : "isAuth error"})
    }
}


export default isAuth