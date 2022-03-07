"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validationSignUp = exports.validation = void 0;

var _expressValidator = require("express-validator");

var validationSignUp = [(0, _expressValidator.check)("firstname").isLength({
  min: 3
}).withMessage("the name must have minimum length of 3").trim(), (0, _expressValidator.check)("lastname").isLength({
  min: 3
}).withMessage("the name must have minimum length of 3").trim(), (0, _expressValidator.check)("email").normalizeEmail().isEmail().withMessage("invalid email address").normalizeEmail(), (0, _expressValidator.check)("password").isLength({
  min: 8,
  max: 15
}).withMessage("your password should have min and max length between 8-15").matches(/\d/).withMessage("your password should have at least one number").matches(/[!@#$%^&*(),.?":{}|<>]/).withMessage("your password should have at least one sepcial character")];
exports.validationSignUp = validationSignUp;

var validation = function validation(req, res, next) {
  var result = (0, _expressValidator.validationResult)(req).formatWith(errorFormatter);
  if (!result.isEmpty()) return res.json({
    error: result.array()
  });
  next();
}; //   body("firstname", "The firstname must be of minimum 3 characters length")
//     .optional()
//     .isLength({ min: 3 })
//     .trim()
//     .unescape()
//     .escape(),
//   body("lastname", "The last name must be of minimum 2 characters length")
//     .optional()
//     .isLength({ min: 1 })
//     .trim()
//     .unescape()
//     .escape(),
//   body("email", "Invalid email address")
//     .optional()
//     .trim()
//     .unescape()
//     .escape()
//     .isEmail()
//     .custom(),
//   body("password", "Invalid password")
//     .optional()
//     .isLength({ min: 6, max: 20 })
//     .trim()
//     .unescape()
//     .escape(),
//   body("mobile_no", "Enter 10 digit mobile number")
//     .optional()
//     .isLength({ min: 10 })
//     .trim()
//     .escape()
//     .unescape()
//     .isInt(),
//   body("job_role", "Please specify a jobrole")
//  ]
// import { body } from 'express-validator/check'
// export function validate(method) {
//   switch (method) {
//     case 'createUser': {
//       return [
//         body('userName', 'userName doesnt exists').exists(),
//         body('email', 'Invalid email').exists().isEmail(),
//           body('phone').optional().isInt(),
//           body('status').optional().isIn(['enabled', 'disabled'])
//        ]
//     }
//   }
// }


exports.validation = validation;