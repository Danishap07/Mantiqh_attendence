"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = require("@prisma/client");

var prisma;

if (process.env.NODE_ENV === "production") {
  prisma = new _client.PrismaClient();
} // `stg` or `dev`
else {
  if (!global.prisma) {
    global.prisma = new _client.PrismaClient();
  }

  prisma = global.prisma;
}

var _default = prisma;
exports["default"] = _default;