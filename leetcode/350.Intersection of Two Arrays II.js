/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let map = new Map();
  let res = [];
  for (let i = 0; i < nums1.length; i++){
    if(map.has(nums1[i])) {
      map.set(nums1[i], map.get(nums1[i])+1);
  }
  else{
    map.set(nums1[i], 1);
  }
}

  for (let i = 0; i < nums2.length; i++){
    if(map.has(nums2[i])){
      res.push(nums2[i]);
      if(map.get(nums2[i])>1) {
        map.set(nums2[i], map.get(nums2[i])-1);
      }
      else {
        map.delete(nums2[i]); //delete  key-value pair if value = 0
      }
    }
  }

  return res;
};
// @lc code=end
