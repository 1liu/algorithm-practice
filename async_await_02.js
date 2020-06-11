async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
}

async function async2() {
  console.log('async2')
}

async1();

new Promise((resolve) => {
  console.log(1)
  resolve()
}).then(() => {
  console.log(2)
}).then(() => {
  console.log(3)
}).then(() => {
  console.log(4)
})


// === following codes https://juejin.im/post/5c3cc981f265da616a47e028

// function async1() {
//   console.log('async1 start');
//   const p = async2();
//   return new Promise((resolve) => {
//     Promise.resolve().then(() => {
//       p.then(resolve)
//     })
//   })
//     .then(() => {
//       console.log('async1 end')
//     });
// }

// function async2() {
//   console.log('async2');
//   return Promise.resolve();
// }

// async1();

// new Promise((resolve) => {
//   console.log(1)
//   resolve()
// }).then(() => {
//   console.log(2)
// }).then(() => {
//   console.log(3)
// }).then(() => {
//   console.log(4)
// })


// function async1() {
//   console.log('async1 start');
//   const p = async2();
//   return Promise.resolve(p)
//     .then(() => {
//       console.log('async1 end')
//     });
// }

// function async2() {
//   console.log('async2');
//   return Promise.resolve();
// }

// async1();

// new Promise((resolve) => {
//   console.log(1)
//   resolve()
// }).then(() => {
//   console.log(2)
// }).then(() => {
//   console.log(3)
// }).then(() => {
//   console.log(4)
// })
