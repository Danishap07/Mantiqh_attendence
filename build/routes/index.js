"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _create = _interopRequireDefault(require("../controllers/user/create"));

var _read = _interopRequireDefault(require("../controllers/user/read"));

var _login = _interopRequireDefault(require("../controllers/user/login"));

var _jwtAuth = _interopRequireDefault(require("../middlewere/jwtAuth"));

var _create2 = _interopRequireDefault(require("../controllers/admin/create"));

var _validation = require("../middlewere/validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Router = (0, _express.Router)(); // Router.route('/').get(prisma, (req, res) => {
//     return res.status(200).send("api is working fine")
// })

Router.route('/admin_signup').post(_create2["default"]);
Router.route('/signup').post(_validation.validationSignUp, _validation.validation, _create["default"]);
Router.route('/login').post(_login["default"]);
Router.route('/data').get(_jwtAuth["default"], _read["default"]);
var _default = Router;
exports["default"] = _default;