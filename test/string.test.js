import string from '../src/js/string'

test('getRandomString', () => {
  expect(string.getRandomString()).not.toBeNull()
})

test('replaceStr', () => {
  let str = 'hello, {content}'
  let dataObj = {
    content: 'world!'
  }
  expect(string.replaceStr(str, dataObj)).not.toBeFalsy()
})