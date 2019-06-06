import time from '../src/js/time'

test('timestampFormat', () => {
  expect(time.timestampFormat(1559825151)).toEqual('2019-06-06 20:45:51')
})
