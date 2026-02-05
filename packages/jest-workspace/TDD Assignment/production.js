// 3. I honestly really like the TDD approach. It is time consuming but I personally
// think as a programmer, it is very professional to go about this way. It's like
// you're brainstorming each scenario of how your code can go wrong before you start on it
// and while it is time consuming, I think it can be more time consuming figuring out 
// what you missed in your program by not brainstorming the possible edge cases before 
// diving in.

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
        const current = this.sharesFor(symbol);


        if (shares > current) {
            throw new Error("Not possible to sell this number of shares.");
        }

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
