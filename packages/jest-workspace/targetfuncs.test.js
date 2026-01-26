const myFunctions = require('./targetfuncs.js');

test('Testing div -- success', () => {
  const target = 2;
  const result = myFunctions.div(10, 5);
  expect(target).toBe(result);
});

test('Testing div -- success', () => {
  const target = null;
  const result = myFunctions.div(10, 0);
  expect(target).toBe(result);
});

test('Testing div -- success', () => {
  const target = true;
  const result = myFunctions.containsNumbers("I am 20 years old");
  expect(target).toBe(result);
});

test('Testing div -- success', () => {
  const target = false;
  const result = myFunctions.containsNumbers("I am twenty years old");
  expect(target).toBe(result);
});
