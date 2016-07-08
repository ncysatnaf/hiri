'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hiri = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _util = require('./util');

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _bindCommands = require('./bindCommands');

var _bindCommands2 = _interopRequireDefault(_bindCommands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var hiri = exports.hiri = function () {
  function hiri(commands) {
    _classCallCheck(this, hiri);

    this.argv = this.getInput();
    this.commandlist = [];
    this.dispatch = this.dispatch.bind(this);
    this.commands = this.createCommand(commands);
    this.listen = this.listen();
  }

  _createClass(hiri, [{
    key: 'getInput',
    value: function getInput() {
      var argv = process.argv.slice(2);

      return (0, _util.confInput)(argv);
    }
  }, {
    key: 'createCommand',
    value: function createCommand(commands) {
      var _this = this;

      var keys = Object.keys(commands);
      keys.forEach(function (val) {
        val.split(',').forEach(function (val) {
          _this.commandlist.push(val);
        });
      });
      return (0, _bindCommands2.default)(commands, this.dispatch);
    }
  }, {
    key: 'dispatch',
    value: function dispatch(command) {
      var context = {
        input: this.argv.input,
        flags: this.argv.flags
      };
      command.call(context);
    }
  }, {
    key: 'runCommand',
    value: function runCommand(command) {
      command();
    }
  }, {
    key: 'listen',
    value: function listen() {
      var _this2 = this;

      var command = this.argv.flags && Object.keys(this.argv.flags);

      command.forEach(function (val) {
        if (_this2.commandlist.indexOf(val) !== -1) {
          _this2.runCommand(_this2.commands[val]);
        }
      });
    }
  }]);

  return hiri;
}();