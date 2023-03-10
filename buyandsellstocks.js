/* Input: prices = [7,1,5,3,6,4]
   Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Total profit is 4 + 3 = 7. */

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

/*
let's dry run the above code
-> i=0 (7) i+1=1 (1)
   if(1>7) { it is not so SKIP TO NEXT ITERATION}

-> i=1 (1) i+1=2 (5)
   if(5>1)
   {
    sum= 0 + 5-1;
    sum=4;
   }

-> i=2 (5) i+1=3 (3)
   if(3>5) { it is not so SKIP TO NEXT ITERATION}

-> i=3 (3) i+1=4 (6)
   if(6>3){
    sum=4+6-3;
    sum=7;
   }

-> i=4 (6) i+1=5 (4)
   if(4>5) { it is not so SKIP TO NEXT ITERATION}

*/