"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var admin = _interopRequireWildcard(require("firebase-admin"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
class FirebaseRepository {
  constructor(collection) {
    let defaultApp;
    if (!admin.apps.length) {
      defaultApp = admin.initializeApp();
      defaultApp.firestore().settings({
        timestampsInSnapshots: true
      });
    } else {
      defaultApp = admin.app();
    }
    this.db = defaultApp.firestore();
    this.collection = collection;
    this.firebaseCollection = this.db.collection(collection);
  }
  getById(id) {
    var _this = this;
    return _asyncToGenerator(function* () {
      const response = yield _this.firebaseCollection.where('id', '==', id).get();
      if (response.empty) {
        return null;
      }
      return _this.processFirebaseResponse(response)[0];
    })();
  }
  set(item) {
    var _this2 = this;
    return _asyncToGenerator(function* () {
      yield _this2.db.doc(`${_this2.collection}/${item.id}`).set(JSON.parse(JSON.stringify(item)));
    })();
  }
  delete(id) {
    var _this3 = this;
    return _asyncToGenerator(function* () {
      yield _this3.db.doc(`${_this3.collection}/${id}`).delete();
    })();
  }
  processFirebaseResponse(response) {
    return response.docs.map(itemRef => itemRef.data());
  }
}
var _default = exports.default = FirebaseRepository;