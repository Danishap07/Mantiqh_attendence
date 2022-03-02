"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = userValidate;

var _expressValidator = require("express-validator");

function userValidate(req, res) {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var email = req.body.email;
  var password = req.body.password;
  var phone = req.body.mobile_no;
  var job_role = req.body.job_role;
  (0, _expressValidator.check)(firstname, 'Firstname is required').isAlpha().isLength(3).notEmpty();
  (0, _expressValidator.check)(lastname, 'Lastname is required').isAlpha().isLength(1).notEmpty();
  (0, _expressValidator.check)(email, 'Email is required').isEmail().notEmpty();
  (0, _expressValidator.check)(password, 'Password is required').isLength(6).notEmpty();
  (0, _expressValidator.check)(phone, 'Phone number is required').isMobilePhone().notEmpty();
  (0, _expressValidator.check)(job_role, 'Job role is required').notEmpty();

  if (!error.isEmpty()) {
    console.log(error.array());
    return res.send(error);
  }
}