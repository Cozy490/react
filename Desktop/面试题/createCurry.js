// 函数柯理化
function createCurry(fn, args = []) {
  const argLen = fn.length
  return function(...params){
    const newArgs = args.concat(...params)
    if(newArgs.length < argLen){
      return createCurry.call(this, fn, newArgs)
    }
    return fn.apply(this, newArgs)
  }
}