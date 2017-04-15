'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.setActionType = setActionType;
var defaultActionType = exports.defaultActionType = 'RADHOC';

function setActionType(actionName) {
  if (actionName && typeof actionName === 'string') {
    return defaultActionType + '_' + actionName.toUpperCase();
  } else {
    return defaultActionType;
  }
}

var radhoc = function radhoc(reducer) {
  var actionName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return function (state, action) {
    var type = setActionType(actionName);

    if (type === action.type && _typeof(action.update) === 'object') {
      return Object.assign({}, state, action.update);
    }

    return reducer(state, action);
  };
};

exports.default = radhoc;