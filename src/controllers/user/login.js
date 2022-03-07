import jwt from 'jsonwebtoken'
import prisma from '../../utils/prisma'
import bcrypt from 'bcryptjs'
import {} from "dotenv"

export default
async function(req, res) {
    const user = await prisma.users.findUnique({
      where: {email: req.body.email}
    })
    
    if(user.length === 0) {
      res.send(JSON.stringify({"status": 404, "error": 'Not user with that email', "token": null}));
      return;
    }
    const ispassword = await bcrypt.hash(req.body.password, 10);
    const valid = await bcrypt.compare(req.body.password, ispassword);
    if(!valid) {
      res.send(JSON.stringify({"status": 404, "error": 'Incorrect password', "token": null}));
      return;
    }
    // verify: needs SECRET | use for authentication
    // decode: no secret | use for client side 
    else {
    const token = jwt.sign({
     userId: user.id 
    }, 
    process.env.JWT_SECRET,
    { expiresIn: '24h' });
    res.status(200).send({ "token": token });
  }
}