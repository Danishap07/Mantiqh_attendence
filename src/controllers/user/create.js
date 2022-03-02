import prisma from '../../utils/prisma'
import bcrypt from 'bcryptjs' 
// import validation from '../../middlewere/validation';
import {} from "dotenv"
import jwt from 'jsonwebtoken'

function newFunction() {
  return 'dotenv'
}

export default 

  async function handler(req, res) {
  try {
    if(!req.body){
      res.status(400).send("some fields are empty")
    }
    // check if user already exist
    const emailExist = await prisma.users.findFirst({ where: { email: req.body.email } })
    if(emailExist){
      res.status(409).send("email already exist")
    }

    const data = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: req.body.password,
      mobile_no: req.body.mobile_no,
      jobRole: req.body.jobRole
    }
    const hash = data.password = bcrypt.hash(data.password, 10);

      const results = await prisma.users.create({
        data
      });

      const token = jwt.sign({
        user: user.email 
       }, 
       process.env.JWT_SECRET,
       { expiresIn: '24h' });
       res.status(200).send({ "token": token });
     
      return res.status(200).json({ token, msg: 'user added successfully!'});
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
   
}