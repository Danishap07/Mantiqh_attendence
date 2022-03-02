"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validate = validate;

var _expressValidator = require("express-validator");

var _response = _interopRequireDefault(require("express/lib/response"));

var _prisma = _interopRequireDefault(require("../utils/prisma"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function validate() {
  [// check('firstname', 'Firstname is required').isAlpha().isLength(3).notEmpty(),
  // check('lastname', 'Lastname is required').isAlpha().isLength(1).notEmpty(),
  // check('email', 'Email is required').isEmail().notEmpty(),
  // check('password', 'Password is required').isLength(6).notEmpty(),
  // check('mobile_no', 'Phone number is required').isMobilePhone().notEmpty(),
  // check('job_role', 'Job role is required').notEmpty()
  (0, _expressValidator.body)("firstname", "The firstname must be of minimum 3 characters length").optional().isLength({
    min: 3
  }).trim().unescape().escape(), (0, _expressValidator.body)("lastname", "The last name must be of minimum 2 characters length").optional().isLength({
    min: 1
  }).trim().unescape().escape(), (0, _expressValidator.body)("email", "Invalid email address").optional().trim().unescape().escape().isEmail().custom( /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value) {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _prisma["default"].users.findmany({
                data: req.body.email
              });

            case 2:
              result = _context.sent;

              (function (error, result) {
                if (result.length) {
                  return _response["default"].status(409).send({
                    msg: 'This user is already in use!'
                  });
                }
              });

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }()), (0, _expressValidator.body)("password", "Invalid password").optional().isLength({
    min: 6,
    max: 20
  }).trim().unescape().escape(), (0, _expressValidator.body)("mobile_no", "Enter 10 digit mobile number").optional().isLength({
    min: 10
  }).trim().escape().unescape().isInt(), (0, _expressValidator.body)("job_role", "Please specify a jobrole")];
}