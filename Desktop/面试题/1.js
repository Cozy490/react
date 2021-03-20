inner = 'window';
function say() {
    console.log(inner);
    console.log(this.inner);
}
var obj1 = (function() {
    var inner = '1-1';
    return {
        inner: '1-2',
        say: function() {
            console.log(inner);
            console.log(this.inner);
        }
    }
})();
say();
obj1.say();
obj1.say = say;
obj1.say();
// 实现 hasProperty(o, 'x.y.z') 方法，可以判断 o.x.y.z 路径是否存在对应属性
function hasProperty(o,str){
  const arr = str.split('.')

}

console.log();