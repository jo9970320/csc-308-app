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
        this.stocks[symbol] = current - shares;
}
    uniqueSymbols() {
    return Object.keys(this.stocks).length;
    }



}
module.exports = {StockPortfolio}
