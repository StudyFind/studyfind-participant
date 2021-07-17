"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _firebase = _interopRequireDefault(require("firebase"));

var _react = require("react");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var MAX_QUERY_RANGE = 100;
var MILE_TO_KILO = 1.609;

function useGeoCollection(ref, user, range) {
  var _useState = (0, _react.useState)(),
      _useState2 = _slicedToArray(_useState, 2),
      collection = _useState2[0],
      setCollection = _useState2[1];

  var _useState3 = (0, _react.useState)(),
      _useState4 = _slicedToArray(_useState3, 2),
      init = _useState4[0],
      setInitial = _useState4[1];

  (0, _react.useEffect)(function () {
    if (user) {
      //CENTER COORDINATES FOR TESTING PURPOSES: 34.131707, -83.729398
      var query = ref.near({
        center: new _firebase["default"].firestore.GeoPoint(34.131707, -83.729398),
        radius: user.timezone.split('/')[0] === "America" ? MAX_QUERY_RANGE * MILE_TO_KILO : MAX_QUERY_RANGE
      });
      var documents = [];
      query.get().then(function (val) {
        val.docs.forEach(function (doc) {
          console.log(doc);
          documents.push(_objectSpread({
            id: doc.id,
            distance: doc.distance
          }, doc.data()));
        });
        setCollection(documents);
        setInitial(documents);
      });
    }
  }, [user]);
  (0, _react.useEffect)(function () {
    if (user) {
      var radius = user.timezone.split('/')[0] === "America" ? range * MILE_TO_KILO : range;
      setCollection(init.filter(function (study) {
        if (study.distance > radius) return false;
        return true;
      }));
    }
  }, [range]);
  return collection;
}

var _default = useGeoCollection;
exports["default"] = _default;