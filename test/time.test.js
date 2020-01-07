import time from '../src/js/time'

test('timestampFormat', () => {
  expect(time.timestampFormat(1559825151)).toEqual('2019-06-06 20:45:51')
})

test('secondFormat', () => {
  expect(time.secondFormat(1180, 0, ['天', false], ['时', false], ['分', false], ['秒', false])).toEqual('19分40秒')
})

test('calcu', () => {
  expect(time.calcu(1180, 60)).toEqual({ data: 19, remainSecond: 40 })
})