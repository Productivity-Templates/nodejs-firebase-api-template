"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleWriteRequest = exports.handleReadRequest = void 0;
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const handleRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (response, callback, status = 200, allow404 = false) {
    try {
      if (!callback || typeof callback !== 'function') {
        throw new TypeError('Insert a callback function into handle request.');
      }
      const ret = yield callback();
      if (!ret && allow404) return response.sendStatus(404);
      return response.status(status).json(ret);
    } catch (error) {
      console.error(error);
      return response.status(500).json(error.message);
    }
  });
  return function handleRequest(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
const handleWriteRequest = exports.handleWriteRequest = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(function* (response, callback, status = 200) {
    return yield handleRequest(response, callback, status);
  });
  return function handleWriteRequest(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
const handleReadRequest = exports.handleReadRequest = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (response, callback, status = 200) {
    return yield handleRequest(response, callback, status, true);
  });
  return function handleReadRequest(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();