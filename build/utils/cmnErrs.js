"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  "function": function _function(req, res) {
    if (!data) {
      return res.status(404).send('No data available.');
    } else if (unauthorized) {
      return res.status(401).send('Unauthorized');
    } else if (forbidden) {
      return res.status(403).send('Data forbidden');
    } else if (invalidMethod) {
      return res.status(405).send('Method Invalid.');
    }
  }
};
exports["default"] = _default;