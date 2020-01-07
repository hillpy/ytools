import is from '../src/js/is'

test('isSupportTouch', () => {
  expect(is.isSupportTouch()).toBe(false)
})

test('isSupportLocalStorage', () => {
  expect(is.isSupportLocalStorage()).toBe(true)
})

test('isSupportCookie', () => {
  expect(is.isSupportCookie()).toBe(true)
})

test('18888888888 is phone ', () => {
  expect(is.isMobilePhone(18888888888)).toBe(true)
})

test('6.6 is number ', () => {
  expect(is.isNumber(6.6)).toBe(true)
})

test('44 is integer ', () => {
  expect(is.isInteger(44)).toBeTruthy()
})
