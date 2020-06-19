var rotate = function (nums, k) {
  let len = nums.length;
  k = k % len;
  let count = 0;

  for (let start = 0; count < len; start++) {
    let cur = start;
    let pre = nums[cur];
    do {
      let next = (cur + k) % len;
      let temp = nums[next]
      nums[next] = pre;
      pre = temp;
      cur = next;
      count++;
    } while (cur !== start)

  }
};
let arr = [1, 2, 3, 4, 5, 6];
rotate(arr,2)
console.log(arr)
