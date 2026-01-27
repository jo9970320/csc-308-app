class StockPortfolio{
    constructor(){
        this.stocks = {};
    }
    isEmpty(){
        return Object.keys(this.stocks).length === 0;
    }
    purchase(symbol, shares) {
        const current = this.stocks[symbol] ?? 0;
        this.stocks[symbol] = current + shares;
    }
    sell(symbol, shares) {
        const current = this.stocks[symbol] ?? 0;
        const updated = current - shares;

        if (updated === 0) {
            delete this.stocks[symbol];
        } else {
            this.stocks[symbol] = updated;
        }
    }

    uniqueSymbols() {
        return Object.keys(this.stocks).length;
    }
    sharesFor(symbol) {
        return this.stocks[symbol] ?? 0;
    }



}
module.exports = {StockPortfolio}
