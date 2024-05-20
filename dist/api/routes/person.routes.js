"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _handleRequest = require("../utils/handle-request");
var _controllers = require("../controllers");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
const router = _express.default.Router();
router.get('/', /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(function* (req, res) {
    return yield (0, _handleRequest.handleReadRequest)(res, /*#__PURE__*/_asyncToGenerator(function* () {
      return yield _controllers.personController.getAll();
    }));
  });
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
router.get('/:id', /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(function* (req, res) {
    return yield (0, _handleRequest.handleReadRequest)(res, /*#__PURE__*/_asyncToGenerator(function* () {
      return yield _controllers.personController.getById(req.params.id);
    }));
  });
  return function (_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}());
router.post('/', /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(function* (req, res) {
    return yield (0, _handleRequest.handleWriteRequest)(res, /*#__PURE__*/_asyncToGenerator(function* () {
      return yield _controllers.personController.create(req.body);
    }), 201);
  });
  return function (_x5, _x6) {
    return _ref5.apply(this, arguments);
  };
}());
router.put('/:id', /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(function* (req, res) {
    return yield (0, _handleRequest.handleWriteRequest)(res, /*#__PURE__*/_asyncToGenerator(function* () {
      return yield _controllers.personController.update(req.params.id, req.body);
    }));
  });
  return function (_x7, _x8) {
    return _ref7.apply(this, arguments);
  };
}());
router.delete('/:id', /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(function* (req, res) {
    return yield (0, _handleRequest.handleWriteRequest)(res, /*#__PURE__*/_asyncToGenerator(function* () {
      return yield _controllers.personController.delete(req.params.id);
    }));
  });
  return function (_x9, _x10) {
    return _ref9.apply(this, arguments);
  };
}());
var _default = exports.default = router;