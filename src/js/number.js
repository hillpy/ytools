import is from './is'

/**
 * 数值类，数值相关函数
 */
export default class {
  /**
   * 随机获取指定范围整数
   *
   * @param {*} min
   * @param {*} max
   */
  static getRandomInteger (min, max) {
    is.isInteger(min) || (min = 0)
    is.isInteger(max) || (max = 100)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
}
