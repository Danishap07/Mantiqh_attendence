import { Router as _Router } from 'express';
import register from '../controllers/user/create';
import readData from '../controllers/user/read';
import login from '../controllers/user/login';
import auth from '../middlewere/jwtAuth'
import createAdmin from '../controllers/admin/create'
import { validationSignUp, validation } from '../middlewere/validation';
// import userById from '../controllers/user/read'

const Router = _Router();

// Router.route('/').get(prisma, (req, res) => {
//     return res.status(200).send("api is working fine")
// })

Router.route('/admin_signup').post(createAdmin)

Router.route('/signup').post(validationSignUp, validation, register)

Router.route('/login').post(login)

Router.route('/').get(auth, readData);

export default Router