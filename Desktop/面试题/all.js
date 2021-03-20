// 深拷贝
function deepClone(obj){
  if (typeof obj === 'object') {
    var result = obj.constructor === Array ? []:{}
    for(let i in obj ){
       result[i] = typeof obj[i] === 'object' ? deepClone(obj[i]):obj[i]
    }
  }else{
    var result = obj
  }
  return result
}
const arr = [0,1,[0,2]]
const obj = {a:1,b:2,c:{
  d:1,
  r:{
    a:2
  }
}}
// console.log(deepClone(arr));
// console.log(deepClone(obj));

// 数组扁平化
function arrConcat(arr){
  return arr.reduce((pre,next)=>{
    return pre.concat(Array.isArray(next)?arrConcat(next):next)
  },[])
}
// console.log(arrConcat(arr));
// 函数柯理化
function curry(){
  const args = [...arguments]
  var addres = function(){
    args.push(...arguments)
    return addres
  }
  addres.toString = function(){
    return args.reduce((a,b)=>{
      return a+b
    })
  }
  return addres
}
// console.log(curry(1));
// console.log(curry(1)(5));
Function.prototype.bind1 = function(){
  const args = Array.prototype.slice.call(arguments)
  const t = args.shift()
  const self = this
  return function(){
    self.apply(t,args)
  }
}
function fn1(a,b){
  console.log(this,'this');
  console.log(a,b);
}
const obj1 = {
  a: 1
}
const fn2 = fn1.bind1(obj1,10,20)
const res = fn2()
console.log(res);

// 防抖
function debounce(fn,delay = 500){
  let timer = null;
  return function(){
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{
      fn.apply(this,arguments)
      timer = null
    },delay)
  }
}
// 数组排序
const sortArr = [90,20,40,10,100]
// console.log(sortArr.sort(function(a,b){return a-b}));
// console.log(sortArr.sort(function(a,b){return b-a}));
// sleep
console.log(1);
function sleep(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve()
      console.log(2000);
    },ms)
  })
}
async function int() {
  await sleep(2000)
  console.log(10);
}
int()

// 大数相加
function addStrings (num1, num2){
  //TODO your code goes here...
  const len = Math.max(num1.length, num2.length)
    num1 = num1.padStart(len, '0')
    num2 = num2.padStart(len, '0')
    let flag = 0
    let res = ''
    for(let i = len - 1; i>=0; i--){
      const item1= Number(num1[i]) || 0
      const item2 = Number(num2[i]) || 0
      // console.log(item1,item2)
      const t = item1 + item2 + flag
      const total = t%10
      flag = Math.floor(t / 10)
      res = total + res
    }

    if(flag > 0){
      res = flag + res
    }
    return res
}
// // 题目要求：实现一个 Range(from, to, step)
// 预期效果：
// Range(1, 10, 3);      // 输出：[1,4,7,10]// 题目要求：实现一个 Range(from, to, step)
// 预期效果：
// Range(1, 10, 3);      // 输出：[1,4,7,10]
function Range(from, to, step){
  const res = []
  for(let i = from;i<to;i+=step){
    res.push(i)
  }
  return res
}
console.log(Range(1, 10, 3));