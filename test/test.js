// test.js

//carga programa principal
const esPar = require('../programa');

//tests
test('4 debería ser par', () => {
  expect(esPar(4)).toBeTruthy();
});

test('5 debería ser impar', () => {
  expect(esPar(5)).toBeFalsy();
});