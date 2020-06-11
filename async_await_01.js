async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}
async function async2() {
  console.log('async2')
}
console.log('script start')
setTimeout(function () {
  console.log('setTimeout')
}, 0)
async1();
new Promise(function (resolve) {
  console.log('promise1')
  resolve();
}).then(function () {
  console.log('promise2')
})
console.log('script end')

/* https://cloud.tencent.com/developer/article/1498265
https://segmentfault.com/a/1190000015057278
 */

// new Promise((resolve, reject) => {
//   console.log("async1 start");
//   console.log("async2");
//   resolve(Promise.resolve());
// }).then(() => {
//   console.log("async1 end");
// });

// new Promise(function (resolve) {
//   console.log("promise1");
//   resolve();
// }).then(function () {
//   console.log("promise2");
// });
