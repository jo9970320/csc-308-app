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

test("2.4: selling shares subtracts from owned shares", () => {
  const portf = new StockPortfolio();
  portf.purchase("Item", 10);
  portf.sell("Item", 3);
  const target = 7;
  const result = portf.stocks["Item"]
  expect(target).toBe(result);
});

test("2.4/2.8: test negative shares", () => {
  const portf = new StockPortfolio();
  portf.purchase("Item", 10);
  expect(() => portf.sell("Item", 11)).toThrow("Not possible to sell this number of shares.");

});

test("2.5: uniqueSymbolsCount returns number of unique symbols owned", () => {
  const portf = new StockPortfolio();
  portf.purchase("gme", 5);
  portf.purchase("rblx", 10);
  const target = 2;
  const result = portf.uniqueSymbols()
  expect(target).toBe(result);
});
test("2.6: selling all shares removes the symbol from the portfolio", () => {
  const portf = new StockPortfolio();
  portf.purchase("Item", 5);
  portf.sell("Item", 5);
  const result = portf.stocks["Item"]
  expect(result).toBeUndefined();
  expect(portf.uniqueSymbols()).toBe(0);
  expect(portf.isEmpty()).toBe(true);
});

test("2.7: sharesFor returns shares owned for a symbol", () => {
  const portf = new StockPortfolio();
  portf.purchase("RBLX", 10);
  const result = portf.sharesFor("RBLX")
  expect(10).toBe(result);
});

test("2.7: sharesFor returns 0 for a symbol not owned", () => {
  const portf = new StockPortfolio();
  const result = portf.sharesFor("randomItem")
  expect(0).toBe(result);
});
test("2.8: cannot sell more shares than owned", () => {
  const portf = new StockPortfolio();
  portf.purchase("RBLX", 2);

  expect(() => portf.sell("RBLX", 3))
    .toThrow("Not possible to sell this number of shares.");
});

test("2.8: cannot sell shares of a symbol not owned", () => {
  const portf = new StockPortfolio();

  expect(() => portf.sell("RBLX", 1))
    .toThrow("Not possible to sell this number of shares.");
});

