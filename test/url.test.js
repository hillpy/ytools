import url from '../src/js/url'

test('getParam', () => {
  expect(url.getParam('code')).toEqual('')
})
