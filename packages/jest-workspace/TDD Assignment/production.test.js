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

test('2.3: purchase adds shares to a new symbol!', () => {
  const portf = new StockPortfolio(); 
  portf.purchase("Item", 5) 
  const target = portf.stocks["Item"];
  const result = 5;
  expect(target).toBe(result);
});
test("2.3: purchasing the same symbol twice adds shares", () => {
  const portf = new StockPortfolio();
  portf.purchase("Item", 5);
  portf.purchase("Item", 2);
  const target = portf.stocks["Item"];
  const result = 7;
  expect(target).toBe(result);
});
