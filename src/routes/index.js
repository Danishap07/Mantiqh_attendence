import { Router as _Router } from 'express';
import register from '../controllers/user/create';
import readData from '../controllers/user/read';
import { check, validationResult } from 'express-validator'
import login from '../controllers/user/login';
import auth from '../middlewere/jwtAuth'
import createAdmin  from '../controllers/admin/create'
import validate from '../middlewere/validation';

const Router = _Router();

// Router.route('/').get(prisma, (req, res) => {
//     return res.status(200).send("api is working fine")
// })

Router.route('/admin_signup').post(validate, createAdmin)

Router.route('/signup').post(
//         [
//         check("firstname")
//       .isLength({ min: 3 })
//       .withMessage("the name must have minimum length of 3")
//       .trim(),

//     check("lastname")
//       .isLength({ min: 3 })
//       .withMessage("the name must have minimum length of 3")
//       .trim(),  

//     check("email")
//       .isEmail()
//       .withMessage("invalid email address")
//       .normalizeEmail(),

//     check("password")
//       .isLength({ min: 6, max: 16 })
//       .withMessage("your password should have min and max length between 8-15"),

//       check("mobile_no")
//       .isLength({ min: 10 })
//   ],
//    (req, res, next) => {
//   const error = validationResult(req).formatWith(({ msg }) => msg);

//   if (!error.isEmpty()) return res.status(422).json({ error: error.array() });

//   next();
// }, 
 validate, register)

Router.route('/login').post(login)

Router.route('/data').get(auth, readData)

export default Router