

function debounce(fn,delay = 500){
  let timer = null;
  return function(){
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn.apply(this,arguments)
      timer = null
    }, delay);
  }
}
Function.prototype.bind1 = function () {
  const args = Array.prototype.slice.call(arguments)
  const t = args.shift();
  const self = this
  return function () {
    self.apply(t,args)
  }
}
function fn1(a,b) {
  console.log(this,'this');
  console.log(a,b);
}
const fn2 = fn1.bind1({x:1},20,30)
console.log(fn2());

function throttle(fn,delay = 100) {
  let timer = null
  return function () {
    if (timer) {
      return
    }
    timer = setTimeout(() => {
      fn.apply(this,arguments)
      timer = null
    }, delay);
  }
}
// 深拷贝
function deepClone(obj) {
  if (typeof obj === 'object') {
    var result = obj.constructor ===Array?[]:{}
    for (const i in obj) {
      result[i] = typeof obj[i] === 'object'?deepClone(obj[i]):obj[i]
    }
  }else{
    var result = obj
  }
  return result
}
const arr = [10,20,[30,40]]
const obj = {
  a:1,
  b:2,
  c:{
    a:3
  }
}
// console.log(deepClone(arr));
// console.log(deepClone(obj));

// 数组扁平化
function arrConcat(arr) {
  return arr.reduce((pre,next)=>{
    return pre.concat(Array.isArray(next)?arrConcat(next):next)
  },[])
}

// console.log(arrConcat(arr));

// function sum() {
//   // 第一次执行时，定义一个数组专门存储所有参数
//   const args = Array.prototype.slice.call(arguments)
//   // 在内部声明一个函数，利用闭包的特性保存args并收集所有的参数值
//   var adds = function () {
//     args.push(...arguments)
//     // console.log(adds,'闭包中');
//     console.log(args,'闭包中');
//     return adds
//   }
//   console.log(adds.toString,'外边的');
//   // 利用toString隐式转换的特性，当觜火猴执行时隐式转换，并计算返回最终的值
//   adds.toString = function(){
//     return args.reduce((a,b)=>{
//       return a + b
//     })
//   }
//   return adds
// }

// console.log(sum(1));
// console.log(sum(1)(2));

// console.log(1);
function sleeps(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(4000)
    }, ms);
  })
}
async function int(){
  await sleeps(2000)
  // console.log(2);
}
// int()
// console.log(3);

function add(num){
  var sum=num,
  
  tmp=function(v){
      sum+=v;
      return tmp
  };
  
  tmp.toString=function(){
      return sum
  };
  
  return tmp
}


// console.log(add(1),'to');
console.log(add(1)(2)(3),'to');