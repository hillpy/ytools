/**
 * url类，url相关函数
 */
export default class {
  /**
   * 获取url参数
   *
   * @param {*} paraName
   */
  static getParam (paraName) {
    let url = document.location.toString()
    let arrObj = url.split('?')

    if (arrObj.length > 1) {
      let arrPara = arrObj[1].split('&')
      let arr

      for (let i = 0; i < arrPara.length; i++) {
        arr = arrPara[i].split('=')

        if (arr != null && arr[0] === paraName) {
          return arr[1]
        }
      }
      return ''
    } else {
      return ''
    }
  }
}
