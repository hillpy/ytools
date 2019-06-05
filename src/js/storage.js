import is from './is'

/**
 * 存储类，存储相关函数
 */
export default class {
  /**
   * 设置存储
   *
   * @param {*} key
   * @param {*} value
   * @param {*} expire
   * @param {*} type
   */
  static setStore (key, value, expire, type) {
    expire || (expire = 24 * 3600 * 7)
    type || (type = 'localStorage')
    if (type === 'localStorage' && is.isSupportLocalStorage()) {
      window.localStorage.setItem(key, value)
      return true
    } else if (type === 'cookie' && is.isSupportCookie()) {
      let date = new Date()
      date.setTime(date.getTime() + (expire * 1000))
      document.cookie = key + '=' + value + '; expires=' + date.toGMTString()
      return true
    }
    return false
  }

  /**
   * 获取存储
   *
   * @param {*} key
   * @param {*} type
   */
  static getStore (key, type) {
    type || (type = 'localStorage')
    if (type === 'localStorage' && is.isSupportLocalStorage()) {
      return window.localStorage.getItem(key)
    } else if (type === 'cookie' && is.isSupportCookie()) {
      let arr = []
      let reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
      if ((arr = document.cookie.match(reg))) {
        return unescape(arr[2])
      }
    }
    return ''
  }

  /**
   * 删除存储
   *
   * @param {*} key
   * @param {*} type
   */
  static delStore (key, type) {
    type || (type = 'localStorage')
    if (type === 'localStorage' && is.isSupportLocalStorage()) {
      window.localStorage.removeItem(key)
      return true
    } else if (type === 'cookie' && is.isSupportCookie()) {
      let arr = []
      let reg = new RegExp('(^| )' + key + '=([^;]*)(;|$)')
      let value = ''
      let date = new Date()

      if ((arr = document.cookie.match(reg))) {
        value = unescape(arr[2])
      } else {
        value = ''
      }

      date.setTime(date.getTime() - 1)
      document.cookie = key + '=' + value + '; expires=' + date.toGMTString()
      return true
    }
    return false
  }
}
