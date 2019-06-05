/**
 * 对象类，对象相关函数
 */
export default class {
  /**
   * 将newObj扩展到obj
   *
   * @param {*} obj
   * @param {*} newObj
   */
  static extendObj (obj, newObj) {
    for (var key in newObj) {
      obj[key] = newObj[key]
    }
    return obj
  }

  /**
   * 深度拷贝
   *
   * @param {*} obj
   */
  static deepCopy (obj) {
    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          newObj[key] = this.deepCopy(obj[key])
        } else {
          newObj[key] = obj[key]
        }
      }
    }
    return newObj
  }
}
