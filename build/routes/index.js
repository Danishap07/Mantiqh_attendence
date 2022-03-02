"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _create = _interopRequireDefault(require("../controllers/user/create"));

var _read = _interopRequireDefault(require("../controllers/user/read"));

var _validation = require("../middlewere/validation");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Router = (0, _express.Router)(); // Router.route('/').get(prisma, (req, res) => {
//     return res.status(200).send("api is working fine")
// })

Router.route('/signup').post(_create["default"]);
Router.route('/data').get(_read["default"]);
var _default = Router;
exports["default"] = _default;