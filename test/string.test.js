import string from '../src/js/string'

test('getRandomString', () => {
  expect(string.getRandomString()).not.toBeNull();
})
