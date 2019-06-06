import object from '../src/js/object'

test('extendObj', () => {
  let obj = {
    a: 1,
    b: 2
  }
  let newObj = {
    a: 11
  }
  expect(object.extendObj(obj, newObj)).toEqual({ a: 11, b: 2})
})

test('deepCopy', () => {
  let obj = {
    name: 'shinn_lancelot',
    age: 28
  }
  expect(object.deepCopy(obj)).toEqual({ name: 'shinn_lancelot', age: 28 })
})
