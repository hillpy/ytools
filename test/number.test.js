import number from '../src/js/number'

test('getRandomInteger in 1 ~ 10', () => {
  expect(number.getRandomInteger(1, 10)).toBeGreaterThanOrEqual(1)
})

test('getRandomInteger in 1 ~ 10', () => {
  expect(number.getRandomInteger(1, 10)).toBeLessThanOrEqual(10)
})