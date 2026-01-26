const {StockPortfolio} = require('./production.js')

test('2.1: Empty Portfolio -- success!', () => {
  const portf = new StockPortfolio();  
  const target = 0;
  const result = Object.keys(portf.stocks).length;;
  expect(target).toBe(result);
});

test("2.2: new portfolio is empty", () => {
  const p = new StockPortfolio();
  expect(p.isEmpty()).toBe(true);
});