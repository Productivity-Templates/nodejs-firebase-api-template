"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class Phone {
  /**
   * Telefone
   * @param {string} areaCode DDD - Código do Estado
   * @param {string} number Número do Telefone
   */
  constructor(areaCode, number) {
    if (!areaCode) throw new TypeError('The "Area Code" field is required.');
    if (areaCode.length != 2) throw new TypeError('The "Area Code" field must contain 2 digits.');
    if (!/^\d+$/.test(areaCode)) throw new TypeError('The "Area Code" field must contain only numbers.');
    if (!number) throw new TypeError('The "Phone Number" field is required.');
    if (number.length != 8 && number.length != 9) throw new TypeError('The "Phone Number" field must contain 8 or 9 digits.');
    if (!/^\d+$/.test(number)) throw new TypeError('The "Phone Number" field must contain only numbers.');
    this.countryCode = '55';
    this.areaCode = areaCode;
    this.number = number;
  }
}
var _default = exports.default = Phone;