var singleNumber = function (nums) {
  let map = {};

  for (let num of nums) {
    if (map[num]) delete map[num];
    else map[num] = 1;
  }
  return Object.keys(map)[0];

};

/*
hashtable
Time: O(n)
Space: O(n)
 */

// var singleNumber = function (nums) {
//   let single = 0;
//   for (let num of nums) {
//     single ^= num;
//   }
//   return single;
// };

/*
XOR
Time: O(n)
Space: 1
 */
