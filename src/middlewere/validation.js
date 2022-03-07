 import { check, validationResult } from 'express-validator'

export const validationSignUp = [
    check("firstname")
      .isLength({ min: 3 })
      .withMessage("the name must have minimum length of 3")
      .trim(),

    check("lastname")
      .isLength({ min: 3 })
      .withMessage("the name must have minimum length of 3")
      .trim(),  

    check("email")
      .normalizeEmail()
      .isEmail()
      .withMessage("invalid email address")
      .normalizeEmail(),

    check("password")
      .isLength({ min: 8, max: 15 })
      .withMessage("your password should have min and max length between 8-15")
      .matches(/\d/)
      .withMessage("your password should have at least one number")
      .matches(/[!@#$%^&*(),.?":{}|<>]/)
      .withMessage("your password should have at least one special character"),
  ]

export const validation = (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) return res.json({ error: result.array() });

  next();
}


  //   body("firstname", "The firstname must be of minimum 3 characters length")
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