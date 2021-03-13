// Function.prototype.bind1 = function () {
//    const args = [...arguments]
//   // 获取this
//   const t = args.shift();
//   // fn1.bind 中的fn1
//   const self = this
//   // 返回一个函数
//   return function(){
//     return self.apply(t,args)
//   }
// }

// Function.prototype.bind1 = function(){
//   const args = [...arguments];
//   // 获取数组第一项 第一项是要指向的this
//   const t = args.shift();
//   // 获取当前调用bind 的函数 this
//   const self = this
//   return function(){
//     return self.apply(t,args)
//   }
// }

// Function.prototype.bind1 = function(){
//   const args = Array.prototype.slice.call(arguments);
//   const t = args.shift();
//   const self = this;
//   return function () {
//     return self.apply(t,args)
//   }
// }
// function fn1(a,b,c) {
//   console.log(this);
//   console.log(a,b,c);
// }
// // const obj = {
// //   a:10
// // }
// const fn2 = fn1.bind1({x:100},10,20,30)
// const res = fn2()
// console.log(res);
