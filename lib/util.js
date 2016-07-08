'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.confInput = undefined;

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parseCommand(argv) {
  var input = argv._;
  delete argv._;
  return {
    input: input,
    flags: argv
  };
}

var confInput = exports.confInput = function confInput(argv) {
  return parseCommand((0, _minimist2.default)(argv));
};