const functions = require("./tdd.js");

test('Testing average -- success', () => {
  const target = 5;
  const result = functions.average_sum([2,4,6,8]);
  expect(target).toBe(result);
});

test('Test for empty -- success', () => {
  const target = [];
  const result = functions.average_sum([]);
  expect(target).toBe(result);
});