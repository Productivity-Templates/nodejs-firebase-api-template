"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Email {
  /**
   * E-mail
   * @param {string} value Valor correspondente ao e-mail
   */
  constructor(value) {
    if (!value) throw new TypeError('The "Email" field is required.');
    if (!this.validateEmail(value)) throw new TypeError('The email provided is invalid.');
    this.value = value;
  }
  validateEmail(value) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
}
var _default = exports.default = Email;