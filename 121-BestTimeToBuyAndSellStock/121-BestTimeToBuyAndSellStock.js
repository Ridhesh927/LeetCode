// Last updated: 8/13/2026, 8:44:58 PM
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minPrice = prices[0];
    let maxProfit = 0;
    for (let price of prices) {

        if (price < minPrice) {
            minPrice = price;
        }
        let profit = price - minPrice;
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }
        return maxProfit;
};