"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = verifyToken;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

require("dotenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function verifyToken(_x, _x2, _x3) {
  return _verifyToken.apply(this, arguments);
}

function _verifyToken() {
  _verifyToken = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var bearerToken, bearer, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            bearerToken = req.headers['authorization'];
            bearer = bearerToken.split(' ');
            token = bearer[1];

            if (token) {
              _context.next = 7;
              break;
            }

            return _context.abrupt("return", res.status(403).send("A token is required for authentication"));

          case 7:
            _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET, function (error, decoded) {
              if (error) {
                res.status(400).send({
                  error: error,
                  message: "authentication failed"
                });
              } else {
                req.user = decoded;
                next();
              }
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _verifyToken.apply(this, arguments);
}