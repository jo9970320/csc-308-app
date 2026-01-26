const {StockPortfolio} = require('./production.js')

test('2.1: Empty Portfolio -- success!', () => {
  const portf = new StockPortfolio();  
  const target = 0;
  const result = Object.keys(portf.stocks).length;;
  expect(target).toBe(result);
});