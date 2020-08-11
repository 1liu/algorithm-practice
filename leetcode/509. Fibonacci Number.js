/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数 509. Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
/* define a cache variable and assign an empty object to it and use it as cache
   if exist in the func cache, directly return instead of calculating it again
   define the base condition when N = 0 and 1
  when N >1; return fib(N-1)+fib(N-2)

  Space: O(n)
  Time: O(n)
 */
var fib = function (N) {
  let cache = {};
  if (cache[N]) return cache[N];
  if (N === 0) {
    cache[0] = 0;
    return 0;
  }
  if (N === 1) {
    cache[1] = 1;
    return 1;
  }
  return fib(N - 1) + fib(N - 2);
};

// @lc code=end
