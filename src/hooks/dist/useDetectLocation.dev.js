"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var _firebase = require("database/firebase");

function useDetectLocation(user) {
  (0, _react.useEffect)(function () {
    if (user) {
      navigator.geolocation.getCurrentPosition(function (position) {
        _firebase.firestore.collection("participants").doc(user.id).update({
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }
        })["catch"](function (err) {
          console.log(err);
        });
      });
    }
  }, [user]);
}

var _default = useDetectLocation;
exports["default"] = _default;