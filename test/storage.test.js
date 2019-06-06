import storage from '../src/js/storage'

test('setStore', () => {
  expect(storage.setStore("name", "shinn_lancelot")).toBeTruthy();
})

test('getStore', () => {
  expect(storage.getStore('name')).toBe('shinn_lancelot')
})

test('delStore', () => {
  expect(storage.delStore("name")).toBeTruthy();
})
