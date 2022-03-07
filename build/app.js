"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _expressValidator = _interopRequireDefault(require("express-validator"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _expressValidator["default"])());
app.use(json());
app.use('/api', _routes["default"]);
app.listen(6000, function () {
  console.log('server is listening at port 6000');
});