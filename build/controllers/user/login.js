"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _prisma = _interopRequireDefault(require("../../utils/prisma"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

require("dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _default = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var user, ispassword, valid, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _prisma["default"].users.findUnique({
              where: {
                email: req.body.email
              }
            });

          case 2:
            user = _context.sent;

            if (!(user.length === 0)) {
              _context.next = 6;
              break;
            }

            res.send(JSON.stringify({
              "status": 404,
              "error": 'Not user with that email',
              "token": null
            }));
            return _context.abrupt("return");

          case 6:
            _context.next = 8;
            return _bcryptjs["default"].hash(req.body.password, 10);

          case 8:
            ispassword = _context.sent;
            _context.next = 11;
            return _bcryptjs["default"].compare(req.body.password, ispassword);

          case 11:
            valid = _context.sent;

            if (valid) {
              _context.next = 17;
              break;
            }

            res.send(JSON.stringify({
              "status": 404,
              "error": 'Incorrect password',
              "token": null
            }));
            return _context.abrupt("return");

          case 17:
            token = _jsonwebtoken["default"].sign({
              userId: user.id
            }, process.env.JWT_SECRET, {
              expiresIn: '24h'
            });
            res.status(200).send({
              "token": token
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports["default"] = _default;