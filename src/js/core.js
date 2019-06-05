import common from './common'
import number from './number'
import is from './is'
import object from './object'
import storage from './storage'
import string from './string'
import time from './time'
import url from './url'

let core = {}
Object.assign(core, common, number, is, object, storage, string, time, url)

export default core
