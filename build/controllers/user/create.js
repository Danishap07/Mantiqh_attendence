"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = handler;

var _prisma = _interopRequireDefault(require("../../utils/prisma"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

require("dotenv");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

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
            return _prisma["default"].users.findFirst({
              where: {
                email: req.body.email
              }
            });

          case 4:
            emailExist = _context.sent;

            if (!emailExist) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(409).json({
              message: "email already exist"
            }));

          case 7:
            data = {
              firstname: req.body.firstname,
              lastname: req.body.lastname,
              email: req.body.email,
              password: req.body.password,
              mobile_no: req.body.mobile_no,
              jobRole: req.body.jobRole
            };
            _context.next = 10;
            return _bcryptjs["default"].hash(data.password, 10);

          case 10:
            hash = data.password = _context.sent;
            _context.next = 13;
            return _prisma["default"].users.create({
              data: data
            });

          case 13:
            results = _context.sent;
            token = _jsonwebtoken["default"].sign({
              user: data.email
            }, process.env.JWT_SECRET, {
              expiresIn: '24h'
            });
            res.status(200).send({
              "token": token
            });
            return _context.abrupt("return", res.status(200).json({
              msg: 'User added successfully!'
            }));

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.status(500).json({
              message: _context.t0.message
            }));

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));
  return _handler.apply(this, arguments);
}