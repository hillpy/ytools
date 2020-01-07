/*
 * ytools v0.0.2-beta
 * (c) 2019-2020 shinn_lancelot
 * Released under the MIT License.
 */
/**
 * 公共类，其它公共函数
 */
var defaultExport = function defaultExport () {};

/**
 * 是非类，判断是非
 */
var defaultExport$1 = function defaultExport () {};

defaultExport$1.isSupportTouch = function isSupportTouch () {
  if ('ontouchend' in document) {
    return true
  }
  return false
};

/**
 * 是否支持本地存储
 */
defaultExport$1.isSupportLocalStorage = function isSupportLocalStorage () {
  if (window.localStorage) {
    return true
  }
  return false
};

/**
 * 是否支持cookie
 */
defaultExport$1.isSupportCookie = function isSupportCookie () {
  if (window.navigator.cookieEnabled) {
    return true
  }
  return false
};

/**
 * 是否为手机号
 *
 * @param {*} str
 */
defaultExport$1.isMobilePhone = function isMobilePhone (str) {
  var mobilePhoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;
  if (mobilePhoneReg.test(str)) {
    return true
  }
  return false
};

/**
 * 是否为数值型
 *
 * @param {*} str
 */
defaultExport$1.isNumber = function isNumber (str) {
  if (typeof str === 'number') {
    return true
  }
  return false
};

/**
 * 是否为整数
 *
 * @param {*} str
 */
defaultExport$1.isInteger = function isInteger (str) {
  if (typeof str === 'number' && str % 1 === 0) {
    return true
  }
  return false
};

/**
 * 数值类，数值相关函数
 */
var defaultExport$2 = function defaultExport () {};

defaultExport$2.getRandomInteger = function getRandomInteger (min, max) {
  defaultExport$1.isInteger(min) || (min = 0);
  defaultExport$1.isInteger(max) || (max = 100);
  return Math.floor(Math.random() * (max - min + 1)) + min
};

/**
 * 对象类，对象相关函数
 */
var defaultExport$3 = function defaultExport () {};

defaultExport$3.extendObj = function extendObj (obj, newObj) {
  for (var key in newObj) {
    obj[key] = newObj[key];
  }
  return obj
};

/**
 * 深度拷贝
 *
 * @param {*} obj
 */
defaultExport$3.deepCopy = function deepCopy (obj) {
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object') {
        newObj[key] = this.deepCopy(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj
};

/**
 * 存储类，存储相关函数
 */
var defaultExport$4 = function defaultExport () {};

defaultExport$4.setStore = function setStore (key, value, expire, type) {
  expire || (expire = 24 * 3600 * 7);
  type || (type = 'localStorage');
  if (type === 'localStorage' && defaultExport$1.isSupportLocalStorage()) {
    window.localStorage.setItem(key, value);
    return true
  } else if (type === 'cookie' && defaultExport$1.isSupportCookie()) {
    var date = new Date();
    date.setTime(date.getTime() + (expire * 1000));
    document.cookie = key + '=' + value + '; expires=' + date.toGMTString();
    return true
  }
  return false
};

/**
 * 获取存储
 *
 * @param {*} key
 * @param {*} type
 */
defaultExport$4.getStore = function getStore (key, type) {
  type || (type = 'localStorage');
  if (type === 'localStorage' && defaultExport$1.isSupportLocalStorage()) {
    return window.localStorage.getItem(key)
  } else if (type === 'cookie' && defaultExport$1.isSupportCookie()) {
    var arr = [];
    var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
    if ((arr = document.cookie.match(reg))) {
      return unescape(arr[2])
    }
  }
  return ''
};

/**
 * 删除存储
 *
 * @param {*} key
 * @param {*} type
 */
defaultExport$4.delStore = function delStore (key, type) {
  type || (type = 'localStorage');
  if (type === 'localStorage' && defaultExport$1.isSupportLocalStorage()) {
    window.localStorage.removeItem(key);
    return true
  } else if (type === 'cookie' && defaultExport$1.isSupportCookie()) {
    var arr = [];
    var reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)');
    var value = '';
    var date = new Date();

    if ((arr = document.cookie.match(reg))) {
      value = unescape(arr[2]);
    } else {
      value = '';
    }

    date.setTime(date.getTime() - 1);
    document.cookie = key + '=' + value + '; expires=' + date.toGMTString();
    return true
  }
  return false
};

/**
 * 字符串类，字符串相关函数
 */
var defaultExport$5 = function defaultExport () {};

defaultExport$5.getRandomString = function getRandomString (length, type) {
  if (length === -1) {
    length = defaultExport$2.getRandomInteger(1, 32);
  } else if (!length) {
    length = 16;
  }
  type || (type = 1);

  var chars = '';
  var string = '';
  if (type === 1) {
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  } else if (type === 2) {
    chars = '1234567890';
  } else if (type === 3) {
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  } else {
    chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  }

  for (var i = 0; i < length; i++) {
    string += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return string
};

/**
 * 替换字符串
 *
 * @param {*} str
 * @param {*} dataObj
 */
defaultExport$5.replaceStr = function replaceStr (str, dataObj) {
  if (!str || !dataObj) {
    return false
  }
  if (!(dataObj instanceof Object)) {
    return false
  }
  Object.keys(dataObj).forEach(function (key) {
    str = str.replace(new RegExp('{' + key + '}', 'g'), dataObj[key]);
  });
  return str
};

/**
 * 时间类，时间相关函数
 */
var defaultExport$6 = function defaultExport () {};

defaultExport$6.timestampFormat = function timestampFormat (timestamp, type, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
  timestamp || (timestamp = (new Date()) / 1000);
  type || (type = 0);
  yearStr || (yearStr = '-');
  monthStr || (monthStr = '-');
  dayStr || (dayStr = ' ');
  hourStr || (hourStr = ':');
  minuteStr || (minuteStr = ':');
  secondStr || (secondStr = '');

  var Y = '';
  var M = '';
  var D = '';
  var h = '';
  var m = '';
  var s = '';
  var date = new Date(timestamp * 1000);

  if (type === 0 || type === 1) {
    Y = date.getFullYear() + yearStr;
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + monthStr;
    D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + dayStr;
  }
  if (type === 0 || type === 2) {
    h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + hourStr;
    m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + minuteStr;
    s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) + secondStr;
  }
  return Y + M + D + h + m + s
};

/**
 * 秒数格式化
 *
 * @param {*} second
 * @param {*} type
 * @param {*} daysStr
 * @param {*} hoursStr
 * @param {*} minutesStr
 * @param {*} secondsStr
 */
defaultExport$6.secondFormat = function secondFormat (second, type, daysStr, hoursStr, minutesStr, secondsStr) {
  type || (type = 0);
  if (!daysStr || !(daysStr instanceof Array)) {
    daysStr = ['days', false];
  }
  if (!hoursStr || !(hoursStr instanceof Array)) {
    hoursStr = ['hours', false];
  }
  if (!minutesStr || !(minutesStr instanceof Array)) {
    minutesStr = ['minutes', false];
  }
  if (!secondsStr || !(secondsStr instanceof Array)) {
    secondsStr = ['seconds', false];
  }

  var res = '';
  type === 1 && (res = { str: '', data: [] });
  if (second === undefined) {
    return res
  }

  var calcuRes = {};
  var remainSecond = second;
  var secondLevelArr = [
    {
      str: daysStr[0],
      keep: daysStr[1],
      base: 1 * 60 * 60 * 24
    },
    {
      str: hoursStr[0],
      keep: hoursStr[1],
      base: 1 * 60 * 60
    },
    {
      str: minutesStr[0],
      keep: minutesStr[1],
      base: 1 * 60
    },
    {
      str: secondsStr[0],
      keep: secondsStr[1],
      base: 1
    }
  ];

  for (var i = 0, len = secondLevelArr.length; i < len; i++) {
    calcuRes = this.calcu(remainSecond, secondLevelArr[i].base);
    if (calcuRes.data > 0 || secondLevelArr[i].keep || (type === 0 && res !== '') || (type === 1 && res.str !== '')) {
      if (type === 0) {
        res += (calcuRes.data + secondLevelArr[i].str);
      } else if (type === 1) {
        res.str += calcuRes.data + secondLevelArr[i].str;
        var dataObj = {};
        dataObj.value = calcuRes.data;
        dataObj.str = secondLevelArr[i].str;
        res.data.push(dataObj);
      }
    }
    if (calcuRes.hasOwnProperty('remainSecond')) {
      remainSecond = calcuRes.remainSecond;
    }
  }

  return res
};

/**
 * 根据秒数和基数计算倍数余数
 *
 * @param {*} second
 * @param {*} base
 */
defaultExport$6.calcu = function calcu (second, base) {
  var res = {
    data: 0,
    remainSecond: 0
  };
  if (second === '' || base === '') {
    return res
  }
  res.data = Math.floor(second / base);
  res.remainSecond = res.data > 0 ? second - res.data * base : second;
  return res
};

/**
 * url类，url相关函数
 */
var defaultExport$7 = function defaultExport () {};

defaultExport$7.getParam = function getParam (paraName) {
  var url = document.location.toString();
  var arrObj = url.split('?');

  if (arrObj.length > 1) {
    var arrPara = arrObj[1].split('&');
    var arr;

    for (var i = 0; i < arrPara.length; i++) {
      arr = arrPara[i].split('=');

      if (arr != null && arr[0] === paraName) {
        return arr[1]
      }
    }
    return ''
  } else {
    return ''
  }
};

var core = {};
Object.assign(core, defaultExport, defaultExport$2, defaultExport$1, defaultExport$3, defaultExport$4, defaultExport$5, defaultExport$6, defaultExport$7);

export default core;
