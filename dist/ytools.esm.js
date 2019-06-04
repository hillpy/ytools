/*
 * ytools v0.0.0
 * (c) 2019-2019 shinn_lancelot
 * Released under the MIT License.
 */
var defaultExport = function defaultExport () {};

defaultExport.getNonce = function getNonce (length) {
    if ( length === void 0 ) length = 16;

  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';

  var nonce = '';
  for (var i = 0; i < length; i++) {
    nonce += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return nonce
};

var defaultExport$1 = function defaultExport () {};

defaultExport$1.extendObj = function extendObj (obj, newObj) {
  for (var key in newObj) {
    obj[key] = newObj[key];
  }
  return obj
};

var core = {};
Object.assign(core, defaultExport, defaultExport$1);

export default core;
