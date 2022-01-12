/**
 * Write a function that given an array of stock prices, find the minimum buy price and the maximum sell price that produce the greatest profit.
 * Return the result as an array containing the two prices.
 * 
 * The array will contain numbers that represents the prices of stocks that are varying over time, and the objective is to maximize your profits.
 * BUY HIGH, SELL LOW.
 * 
 * E.g : [2, 1, 5, 3, 4]  :   the best would be to buy when the stock when it costs 1$, and sell it for 5$, so [1, 5]
 */
export function maximizeProfits(prices) {
    let minBuyPrice = prices[0] < prices[1] ? prices[0] : prices[1]
    let maxSellPrice = prices[0] < prices[1] ? prices[1] : prices[2]
    
    let maxProfit = maxSellPrice - minBuyPrice
    let tempBuyPrice = minBuyPrice

    for (let index = 2; index < prices.length; index++) {
        const sellPrice = prices[index];

        if (minBuyPrice > sellPrice) tempBuyPrice = prices[index]
        else {
            const profit = sellPrice - minBuyPrice
            if (profit > maxProfit) {
                maxProfit = profit
                maxSellPrice = sellPrice
                minBuyPrice = tempBuyPrice
            }
        }
    }

    return [minBuyPrice, maxSellPrice]
}
