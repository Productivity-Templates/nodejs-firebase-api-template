"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _ = require(".");
var _entity = _interopRequireDefault(require("../entity"));
var _moment = _interopRequireDefault(require("moment"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class Person extends _entity.default {
  /**
   * Pessoa
   * @param {string} name Nome
   * @param {string} lastName Sobrenome
   * @param {string} birthDate Data de Nascimento
   * @param {Email} email Endereço de email
   * @param {Phone} phone Telefone
   * @param {Address} address Endereço
   * @param {string} id Identificador da Pessoa
   */
  constructor(name, lastName, birthDate, email, phone, address, id) {
    super(id);
    if (!name) throw new TypeError('The "Person Name" field is required.');
    if (!lastName) throw new TypeError('The "Person Surname" field is required.');
    if (!birthDate) throw new TypeError('The "Person Birth Date" field is required.');
    if (typeof birthDate !== 'string') throw new TypeError('The "Person Birth Date" field must be a string.');
    const bDate = (0, _moment.default)(birthDate, 'YYYY-MM-DD');
    if (!bDate.isValid()) throw new TypeError('The "Person Birth Date" field must be a date in the format YYYY-MM-DD.');
    if (!email) throw new TypeError('The "Person Email" field is required.');
    if (!(email instanceof _.Email)) throw new TypeError('The "Person Email" field must be of type Email.');
    if (!phone) throw new TypeError('The "Person Phone" field is required.');
    if (!(phone instanceof _.Phone)) throw new TypeError('The "Person Phone" field must be of type Phone.');
    if (!address) throw new TypeError('The "Person Address" field is required.');
    if (!(address instanceof _.Address)) throw new TypeError('The "Person Address" field must be of type Address.');
    this.name = name;
    this.lastName = lastName;
    this.birthDate = bDate.format();
    this.email = email;
    this.phone = phone;
    this.address = address;
  }
}
var _default = exports.default = Person;