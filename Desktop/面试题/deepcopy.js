
const copyarr = [{a:1,b:{c:2}}]
function deepCopy(obj) {
  if (typeof obj === 'object') {
    var result = obj.constructor === Array ? []:{};
    for(const i in obj){
      result[i] = typeof obj[i] === 'object' ? deepCopy(obj[i]) : obj[i];
    }
  }else{
    var result = obj
  }
  return result
}

// console.log(deepCopy(copyarr));

// 数组扁平化
const arr =[1,2,2,[1,34,[1231]]]
// function arrconcat(arr) {
//   return arr.reduce((pre,next) =>{
//     return pre.concat(Array.isArray(next) ? arrconcat(next):next)
//   },[])
// }
// function arrconcat(arr) {
//   return arr.reduce((pre,next)=>{
//     return pre.concat(Array.isArray(next)?arrconcat(next):next)
//   },[])
// }
// function arrConcat(arr) {
//   return arr.reduce((pre,next)=>{
//     return pre.concat(Array.isArray(next)?arrConcat(next):next)
//   },[])
// }
// console.log(arrConcat(arr));