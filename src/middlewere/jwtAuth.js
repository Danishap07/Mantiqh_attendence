import jwt from 'jsonwebtoken'
import {} from "dotenv"

export default
async function verifyToken(req, res, next) {
    const bearerToken = req.headers['authorization']
    const bearer = bearerToken.split(' ')
    const token = bearer[1]

    if(!token){
        return res.status(403).send("A token is required for authentication")
    } else {
        jwt.verify( token, process.env.JWT_SECRET, (error, decoded) => {
            if(error){
                res.status(400).send({error, message: "authentication failed"})
            } else {
                req.user = decoded
                next()
            }
        } )
    }
}