// 方法1 promise
// console.log(1);
// function Sleep(ms) {
//   return new Promise((resolve,reject)=>{
//     setTimeout(resolve,ms)
//   })
// }
// Sleep(1000).then(()=>{
//   console.log(20000);
// })
//方法三
function sleep3(ms) {
  return new Promise(function(resolve, reject) {
      setTimeout(resolve, ms)
  })
}
async function init() {
  await sleep3(10200);
  console.log(2);
}
init()

// 方法二
// function sleep1(ms, callback) {
//   setTimeout(callback, ms)
// }
// //sleep 1s
// sleep1(1000, () => {
//   console.log(1000)
// })

Function.prototype.bind1 = function(fn){
  const args = Array.prototype.slice.call(arguments)
  const t = args.shift()
  // 拿到当前fn
  const self = this
  return function(){
    self.apply(t,args)
  }
}
function fn(a,b){
  console.log(this,'this');
  console.log(a,b);
}
const fn1 = fn.bind1({x:1},2,3)
const fn2 = fn1()
console.log(fn2);