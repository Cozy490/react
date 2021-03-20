
// 第一题答案  在浏览器运行，node版本不同会影响执行

// script start  async1 start  async2 promise1 script end  async1 end  promise2  setTimeout


let data = [ 
    {
        id: 1,title: "课程 1", 
        children: [
            { id: 4, title: "课程 1-1" }, 
            {id: 5,title: "课程 1-2", 
                children: [
                            { id: 6, title: "课程 1-2-1" },
                            { id: 7, title: "课程 1-2-2" }, 
                ],
            }, 
            ],
    },
    { id: 2, title: "课程 2" }, 
    { id: 3, title: "课程 3" },
];
function flat(arr) {
    function recursion(arr, val) {
   
        for(var i = 0;i < arr.length;++i) {
            let item = arr[i]
            val.push({id: item.id, title: item.title})
            if (item.children) {
                recursion(item.children, val)
            }
        }
        return val
    }
    return recursion(arr, [])
}

console.log(flat(data))


function debounce(fn,delay=500) {
    let timer = null
    return function(){
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
            timer=null
        },delay)
    }
}
