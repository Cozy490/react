// function debounce(fn,delay=500) {
//   // timer在闭包中
//   let timer = null
//   return function () {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//       fn.apply(this,arguments)
//       timer = null
//     })
//   }
// }

// function debounce(fn,delay = 500) {
//   let timer = null
//   return function () {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(()=>{
//       fn.apply(this,arguments)
//       timer = null
//     },delay)
//   }
// }
// function debounce(fn,delay =500) {
//   let timer = null
//   return function () {
//     if (timer) {
//       clearTimeout(timer)
//     }
//     timer = setTimeout(()=>{
//       fn.apply(this,arguments)
//       timer = null
//     },delay)
//   }
// }
// function Range(from, to, step) {
//   const res = []
//   for(let i = from;i<=to;i+=step){
//     res.push(i)
//   }
//   return res
// }
// console.log(Range(1, 10, 3));

// function sum(){
//   let arr = [].slice.call(arguments);
//   let fn = function(){
//     let arr2 = [].slice.call(arguments);
//       return sum.apply(null,arr.concat(arr2));
//   }
  
//   fn.toString = function(){
//     return arr.reduce((v,n) => v+n);
//   }
  
//   return fn;
// }
// console.log(sum(1)(2));

Function.prototype.bind1 = function () {
  const args = [].slice.call(arguments)
  const t = args.shift();
  const self = this
  return function () {
    return self.apply(t,args)
  }
}
function fn(a,b,c) {
  console.log(this,'this');
  console.log(a,b,c);
}
const fn2 = fn.bind1({x:1},2,3,4,5)
const res = fn2()
console.log(res);
// Function.prototype.bind1 = function(){
//     const args = Array.prototype.slice.call(arguments);
//     const t = args.shift();
//     const self = this;
//     return function () {
//       return self.apply(t,args)
//     }
//   }
//   function fn1(a,b,c) {
//     console.log(this);
//     console.log(a,b,c);
//   }
//   // const obj = {
//   //   a:10
//   // }
//   const fn2 = fn1.bind1({x:100},10,20,30)
//   const res = fn2()
//   console.log(res);