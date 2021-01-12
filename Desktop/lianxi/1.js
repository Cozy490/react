// console.log(__dirname);
// console.log(__filename);
// console.log('script start')
//   setTimeout(function(){
//   console.log('setTimeout1')
//   },2000);
// new Promise(resolve => {
//   console.log('Promise start')
//   setTimeout(function(){
//     console.log('setTimeout2')
//     resolve();
//   }, 1000);
//   }).then(function(){
//     console.log('Promise1');
//   }).then(function(){
//   console.log('Promise2');
//   })
// console.log('script end')

console.log('1主线程');					//整体script作为第一个宏任务进入主线程
setTimeout(function() {				//setTimeout，其回调函数被分发到宏任务Event Queue（执行规则：从上到下排序，先进先执行）中
    console.log('2宏任务');
    process.nextTick(function() {
        console.log('3宏任务里面的微任务');
    })
    new Promise(function(resolve) {
        console.log('4微任务');
        resolve();
    }).then(function() {
        console.log('5微任务')
    })
})

new Promise(function(resolve) {		//Promise，new Promise直接执行，输出7
    console.log('7微任务');
    resolve();
}).then(function() {
    console.log('8微任务')			//then被分发到微任务Event Queue中,排在process.nextTick微任务后面。
})
process.nextTick(function() {	//process.nextTick()其回调函数被分发到微任务Event Queue中
    console.log('6微任务');
})
setTimeout(function() {			//setTimeout，其回调函数被分发到宏任务Event Queue中,排在前面的setTimeout后面
    console.log('9宏任务');
    process.nextTick(function() {
        console.log('10宏任务里面的微任务');
    })
    new Promise(function(resolve) {
        console.log('11微任务');
        resolve();
    }).then(function() {
        console.log('12微任务')
    })
})
 
//执行结果： 1主线程、7微任务、6微任务、8微任务、2宏任务、4微任务、3宏任务里面的微任务、5微任务、
//          9宏任务、11微任务、10宏任务里面的微任务、12微任务

var a = function(){
	
}
var a = 1;
console.log(a)
console.log(moudle)