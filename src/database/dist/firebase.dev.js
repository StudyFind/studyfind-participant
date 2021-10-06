"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.firestore = exports.storage = exports.auth = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = _firebase["default"].initializeApp({
  apiKey: "AIzaSyA2HhlpEPOZzuClQ-svONo3I9quxom1C9w",
  authDomain: "studyfind-development.firebaseapp.com",
  projectId: "studyfind-development",
  storageBucket: "studyfind-development.appspot.com",
  messagingSenderId: "629466210039",
  appId: "1:629466210039:web:94ae3e86e517a3ec91bdf2",
  measurementId: "G-5WQEGXGVZQ"
});

var auth = app.auth();
exports.auth = auth;
var storage = app.storage();
exports.storage = storage;
var firestore = app.firestore();
exports.firestore = firestore;