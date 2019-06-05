/**
 * 时间类，时间相关函数
 */
export default class {
  /**
   * 时间戳格式化成日期时间
   *
   * @param {*} timestamp
   * @param {*} type
   * @param {*} yearStr
   * @param {*} monthStr
   * @param {*} dayStr
   * @param {*} hourStr
   * @param {*} minuteStr
   * @param {*} secondStr
   */
  static timestampFormat (timestamp, type, yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
    timestamp || (timestamp = (new Date()) / 1000)
    type || (type = 0)
    yearStr || (yearStr = '-')
    monthStr || (monthStr = '-')
    dayStr || (dayStr = ' ')
    hourStr || (hourStr = ':')
    minuteStr || (minuteStr = ':')
    secondStr || (secondStr = '')

    let Y = ''
    let M = ''
    let D = ''
    let h = ''
    let m = ''
    let s = ''
    let date = new Date(timestamp * 1000)

    if (type === 0 || type === 1) {
      Y = date.getFullYear() + yearStr
      M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + monthStr
      D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate()) + dayStr
    }
    if (type === 0 || type === 2) {
      h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + hourStr
      m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + minuteStr
      s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()) + secondStr
    }
    return Y + M + D + h + m + s
  }
}
