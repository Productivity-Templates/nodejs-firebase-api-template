"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _repositories = require("../../repositories");
var _person = require("../../domain/person");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
class PersonController {
  getAll() {
    return _asyncToGenerator(function* () {
      return yield _repositories.personRepository.getAll();
    })();
  }
  getById(id) {
    return _asyncToGenerator(function* () {
      return yield _repositories.personRepository.getById(id);
    })();
  }
  create(personDto) {
    var _this = this;
    return _asyncToGenerator(function* () {
      const newPerson = _this.parse(personDto);
      yield _repositories.personRepository.set(newPerson);
      return newPerson.id;
    })();
  }
  update(id, personDto) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      const existingPerson = yield _repositories.personRepository.getById(id);
      if (!existingPerson) throw new Error('Pessoa não encontrada.');
      const newPerson = Object.assign({}, existingPerson, personDto);
      newPerson.id = id;
      yield _repositories.personRepository.set(_this2.parse(newPerson));
    })();
  }
  delete(id) {
    return _asyncToGenerator(function* () {
      const existingPerson = yield _repositories.personRepository.getById(id);
      if (!existingPerson) throw new Error('Pessoa não encontrada.');
      yield _repositories.personRepository.delete(id);
    })();
  }
  parse(personDto) {
    if (!personDto) throw new Error('Os dados da pessoa são obrigatórios.');
    if (!personDto.address) throw new Error('O endereço da pessoa é obrigatório.');
    if (!personDto.phone) throw new Error('O telefone da pessoa é obrigatório.');
    const {
      name,
      lastName,
      birthDate,
      email,
      phone,
      address,
      id
    } = personDto;
    const {
      areaCode,
      number
    } = phone;
    const {
      street,
      streetNumber,
      district,
      zipCode,
      city,
      state,
      additionalInfo
    } = address;
    const personEmail = new _person.Email(email);
    const personPhone = new _person.Phone(areaCode, number);
    const personAddress = new _person.Address(street, streetNumber, district, zipCode, city, state, additionalInfo);
    return new _person.Person(name, lastName, birthDate, personEmail, personPhone, personAddress, id);
  }
}
var _default = exports.default = new PersonController();