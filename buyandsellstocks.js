var MaxProfit = function (prices) {
   let sum = 0;
   for (let i = 0; i < prices.length; i++) {
      if (prices[i + 1] > prices[i]) {
         sum = sum + prices[i + 1] - prices[i];
      }
   }
   return sum;
}

console.log(MaxProfit([7, 1, 5, 3, 6, 4]));
