/**
 * 是非类，判断是非
 */
export default class {
  /**
   * 是否支持触摸
   */
  static isSupportTouch () {
    if ('ontouchend' in document) {
      return true
    }
    return false
  }

  /**
   * 是否支持本地存储
   */
  static isSupportLocalStorage () {
    if (window.localStorage) {
      return true
    }
    return false
  }

  /**
   * 是否支持cookie
   */
  static isSupportCookie () {
    if (window.navigator.cookieEnabled) {
      return true
    }
    return false
  }

  /**
   * 是否为手机号
   *
   * @param {*} str
   */
  static isMobilePhone (str) {
    let mobilePhoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/
    if (mobilePhoneReg.test(str)) {
      return true
    }
    return false
  }

  /**
   * 是否为数值型
   *
   * @param {*} str
   */
  static isNumber (str) {
    if (typeof str === 'number') {
      return true
    }
    return false
  }

  /**
   * 是否为整数
   *
   * @param {*} str
   */
  static isInteger (str) {
    if (typeof str === 'number' && str % 1 === 0) {
      return true
    }
    return false
  }
}
