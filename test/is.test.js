import is from '../src/js/is'

test('isSupportTouch', () => {
  expect(is.isSupportTouch())
})

test('isSupportLocalStorage', () => {
  expect(is.isSupportLocalStorage())
})

test('isSupportCookie', () => {
  expect(is.isSupportCookie())
})

test('18888888888 is phone ', () => {
  expect(is.isMobilePhone(18888888888))
})

test('6.6 is number ', () => {
  expect(is.isNumber(6.6))
})

test('44 is integer ', () => {
  expect(is.isInteger(44))
})