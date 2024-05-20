"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _v = _interopRequireDefault(require("uuid/v4"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Entity {
  /**
   * Representa uma entidade
   * @param {string} id Identificador da Entidade
   */
  constructor(id) {
    this.id = !id ? (0, _v.default)() : id;
  }
}
var _default = exports.default = Entity;