// function add() {
//   // 第一次执行时，定义一个数组专门用来存储所有的参数
//   var _args = Array.prototype.slice.call(arguments);

//   // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//   var _adder = function() {
//       _args.push(...arguments);
//       return _adder;
//   };

//   // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//   _adder.toString = function () {
//       return _args.reduce(function (a, b) {
//           return a + b;
//       });
//   }
//   return _adder;
// }
// console.log(add(1));
// console.log(add(1)(2)(3));

function sum() {
  const args = Array.prototype.slice.call(arguments)
  let saveArgs = function () {
    args.push(...arguments)
    return saveArgs
  }
  saveArgs.toString = function () {
    return args.reduce((pre,next)=>{
      return pre+next
    })
  }
  return saveArgs
}
console.log(sum(1));
console.log(sum(1)(2)(3));