"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _prisma = _interopRequireDefault(require("../../utils/prisma"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

require("dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function newFunction() {
  return 'dotenv';
}

function handler(_x, _x2) {
  return _handler.apply(this, arguments);
}

function _handler() {
  _handler = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var emailExist, data, hash, results, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;

            if (!req.body) {
              res.status(400).send("some fields are empty");
            } // check if user already exist


            _context.next = 4;
            return _prisma["default"].admin.findFirst({
              where: {
                email: req.body.email
              }
            });

          case 4:
            emailExist = _context.sent;

            if (emailExist) {
              res.status(409).send("email already exist");
            }

            data = {
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              password: req.body.password,
              mobile_no: req.body.mobile_no,
              jobRole: req.body.jobRole
            };
            hash = data.password = _bcryptjs["default"].hash(data.password, 10);
            _context.next = 10;
            return _prisma["default"].admin.create({
              data: data
            });

          case 10:
            results = _context.sent;
            token = jwt.sign({
              user: admin.email
            }, process.env.JWT_SECRET, {
              expiresIn: '24h'
            });
            res.status(200).send({
              "token": token
            });
            return _context.abrupt("return", res.status(200).json({
              token: token,
              msg: 'admin created successfully!'
            }));

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              message: _context.t0.message
            }));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 16]]);
  }));
  return _handler.apply(this, arguments);
}