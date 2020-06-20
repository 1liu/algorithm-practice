var containsDuplicate = function (nums) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i])) return true;
    else map.set(nums[i]);
  }
  return false;
};


let arr = [1,2,3,4];
let arr2 = [1,2,3,4,1];
console.log(containsDuplicate(arr));
console.log(containsDuplicate(arr2));

/*
Hashtable
Time: O(n)
Space: O(n)
 */
