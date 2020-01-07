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
  static secondFormat (second, type, daysStr, hoursStr, minutesStr, secondsStr) {
    type || (type = 0)
    if (!daysStr || !(daysStr instanceof Array)) {
      daysStr = ['days', false]
    }
    if (!hoursStr || !(hoursStr instanceof Array)) {
      hoursStr = ['hours', false]
    }
    if (!minutesStr || !(minutesStr instanceof Array)) {
      minutesStr = ['minutes', false]
    }
    if (!secondsStr || !(secondsStr instanceof Array)) {
      secondsStr = ['seconds', false]
    }

    let res = ''
    type === 1 && (res = { str: '', data: [] })
    if (second === undefined) {
      return res
    }

    let calcuRes = {}
    let remainSecond = second
    let secondLevelArr = [
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
    ]

    for (let i = 0, len = secondLevelArr.length; i < len; i++) {
      calcuRes = this.calcu(remainSecond, secondLevelArr[i].base)
      if (calcuRes.data > 0 || secondLevelArr[i].keep || (type === 0 && res !== '') || (type === 1 && res.str !== '')) {
        if (type === 0) {
          res += (calcuRes.data + secondLevelArr[i].str)
        } else if (type === 1) {
          res.str += calcuRes.data + secondLevelArr[i].str
          var dataObj = {}
          dataObj.value = calcuRes.data
          dataObj.str = secondLevelArr[i].str
          res.data.push(dataObj)
        }
      }
      if (calcuRes.hasOwnProperty('remainSecond')) {
        remainSecond = calcuRes.remainSecond
      }
    }

    return res
  }

  /**
   * 根据秒数和基数计算倍数余数
   *
   * @param {*} second
   * @param {*} base
   */
  static calcu (second, base) {
    let res = {
      data: 0,
      remainSecond: 0
    }
    if (second === '' || base === '') {
      return res
    }
    res.data = Math.floor(second / base)
    res.remainSecond = res.data > 0 ? second - res.data * base : second
    return res
  }
}
