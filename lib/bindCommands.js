'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindCommands;
function bindCommand(commandCreator, dispatch) {
  return function () {
    return dispatch(commandCreator);
  };
}

function bindCommands(commandCreators, dispatch) {
  if (typeof commandCreators === 'function') {
    return bindCommand(commandCreators, dispatch);
  }

  var keys = Object.keys(commandCreators);
  var boundCommandCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var argvs = key.split(',');

    for (var _i = 0; _i < argvs.length; _i++) {
      var argv = argvs[_i];
      var commandCreator = commandCreators[key];
      if (typeof commandCreator === 'function') {
        boundCommandCreators[argv] = bindCommand(commandCreator, dispatch);
      }
    }
  }

  return boundCommandCreators;
}