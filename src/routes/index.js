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

Router.route('/signup').post(validate, register)

Router.route('/login').post(login)

Router.route('/data').get(auth, readData)

export default Router