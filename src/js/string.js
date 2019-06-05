import number from './number'

/**
 * 字符串类，字符串相关函数
 */
export default class {
  static getRandomString (length, type) {
    if (length === -1) {
      length = number.getRandomInteger(1, 32)
    } else if (!length) {
      length = 16
    }
    type || (type = 1)

    let chars = ''
    let string = ''
    if (type === 1) {
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    } else if (type === 2) {
      chars = '1234567890'
    } else if (type === 3) {
      chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    }

    for (let i = 0; i < length; i++) {
      string += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return string
  }
}
