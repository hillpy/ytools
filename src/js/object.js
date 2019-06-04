export default class {
  static extendObj (obj, newObj) {
    for (var key in newObj) {
      obj[key] = newObj[key]
    }
    return obj
  }
}
