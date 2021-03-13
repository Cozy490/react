
  // 本试卷唯一 ID: 8DBAE64B701DDFACB1531076D9FDE13F, 请勿修改本行内容
/**
 * 回答方式: 直接保存或者复制本js文件, 然后在原处作答. 注意不要改动函数结构
 * 在原本的函数体里返回正确答案
 * 本卷直接用代码判卷, 没有人工干预. 格式改动会导致试卷无效
 */
module.exports = {
  // 选择题, 单项选择, 每题4分
  // 直接返回正确答案字符串, 如 `return 'A';`
  // 实现题, 每题10分
  
  qn0: () => {
    // 只是样例! 不用改动
    //
    // A. 别选我
    //
    // B. 别选我
    //
    // C. 选我, 选我就得分
    //
    // D. 别选我

    return 'C';
  },



  qn1: () => {
    // 以下表达式中能去除所有空格的是:
    //
    // A. str = str.replace(/\s*/g,"");
    //
    // B. str = str.replace(/^\s*|\s*$/g,"");
    //
    // C. str = str.replace( /^\s*/, “”);
    //
    // D. str = str.replace(/(\s*$)/g, "");

    return A;
  },


  qn2: () => {
    // 以下哪个HTTP状态码非错误状态:
    //
    // A. 500
    //
    // B. 303
    //
    // C. 404
    //
    // D. 400

    return B;
  },



  qn3: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //
    //    ```js
    //    function fn1(){
    //      for(var i=0;i<4;i++){
    //        var timer=setTimeout(function(i){
    //          console.log(i);
    //          clearTimeout(timer)
    //        },10,i);
    //      }
    //    }
    //    fn1();
    //    ```
    //
    // A. 0 1 2 3
    //
    // B. 打印为空
    //
    // C. 0 1 2
    //
    // D. 3 2 1 0

    return C;
  },



  qn4: () => {
    // 以下哪个场景*不适合*使用WebSocket:
    //
    // A. 身份审核, 提交文件后1-2个工作日审核完毕, WebSocket通知用户审核完毕
    //
    // B. 去中心化游戏应用, 两人对战用WebSocket通知对手位置, 对战结束后胜负结果上链
    //
    // C. 用户在线聊天, 发送聊天内容和接收聊天内容都用WebSocket传输
    //
    // D. 交易页面, 用户用RESTful API下单, WebSocket告知用户订单成交

    return A;
  },



  qn5: () => {
    // 关于HTML自定义标签, 错误的是:
    //
    // A. 已知的HTML自定义标签才能应用CSS, 以及用JS操作. 未知的HTML标签会成为HTMLUnknownElement的实例
    //
    // B. <greeting></greeting> 这段HTML代码是合法的, 可以被正常展示
    //
    // C. HTML自定义标签可以应用CSS
    //
    // D. HTML自定义标签可以用JS操作

    return B;
  },



  qn6: () => {
    // 以下哪个元素, 不符合在默认情况下, 设置margin上下距离和宽高无效, 但是其他样式有效:
    //
    // A. label
    //
    // B. code
    //
    // C. sub
    //
    // D. button
    //
    // E. strong
    //
    // F. input
    //
    // G. a
    //
    // H. span
    //
    // I. p

    return I;
  },



  qn7: () => {
    // 关于let和var, 以下正确的是:
    //
    // A. let是块级作用域, var是函数级作用域, var变量定义会提升 (hoist), let不会
    //
    // B. let是块级作用域, var是函数级作用域, let和var变量定义都会提升 (hoist)
    //
    // C. let是函数级作用域, var是块级作用域, let变量定义会提升 (hoist), var不会
    //
    // D. let是函数级作用域, var是块级作用域, let和var变量定义都会提升 (hoist)

    return A;
  },



  qn8: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //
    //    ```js
    //    console.log(0.25 + 0.25 === 0.5);
    //    console.log(0.1 + 0.2 === 0.3);
    //    ```
    //
    // A. false false
    //
    // B. true false
    //
    // C. false true
    //
    // D. true true

    return B;
  },



  qn9: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //    ```js
    //    var m = true;
    //    setTimeout(
    //      function() {
    //        m = false;
    //      }, 3000);
    //    );
    //    while(m) {}
    //    console.log('DONE');
    //    ```
    //
    // A. DONE (约3秒后打印, 不精确)
    //
    // B. DONE (立即打印)
    //
    // C. 不打印
    //
    // D. 代码抛错

    return C;
  },



  qn10: () => {
    // 以下方法中, 返回值类型和其他最不同的:
    //
    // A. Array.splice
    //
    // B. Array.forEach
    //
    // C. Array.map
    //
    // D. Array.reduce

    return D;
  },



  qn11: () => {
    // 以下哪个权重最大:
    //
    // A. 类选择器（如 .content）
    //
    // B. ID选择器（如 #content ）
    //
    // C. 标签选择器（如 div、p）
    //
    // D. 内联样式

    return D;
  },



  qn12: () => {
    // CSS中, flex是哪三个flex关键字的简写 (可以查文档):
    //
    // A. flex-grow, flex-shrink, flex-basis
    //
    // B. flex-direction, flex-wrap, flex-flow
    //
    // C. flex-direction, flex-basis, flex-flow
    //
    // D. flex-direction, flex-grow, flex-shrink

    return A;
  },



  qn13: () => {
    // 关于HTTPS / SSL / TLS, 以下错误的是:
    //
    // A. 公司内网需要监控解密HTTPS时, 可以在客户端安装公司自己的CA证书
    //
    // B. 当客户端收到服务器端发送的证书, 证书充当公钥. 为了验证证书有效性, 用客户端已经安装的CA证书检查
    //
    // C. 后续的HTTPS通讯, 客户端和服务器端的通讯会使用非对称加密
    //
    // D. 最常用的非对称加密算法RSA, 是基于大素数分解质因数实现的

    return C;
  },



  qn14: () => {
    // 前端在 foobar.com, 向 api.foobar.com 发送请求, 以下哪个请求不需要OPTIONS preflight (以Chrome为准):
    //
    // A. 一个PUT请求, 没有头
    //
    // B. 一个POST请求, 有User-Agent和Connection头
    //
    // C. 一个HEAD请求, 有Authorization头
    //
    // D. 一个GET请求, 有Content-Type头, 值为application/json

    return D;
  },



  qn15: () => {
    // 以下关于Redux, 错误的是:
    //
    // A. Redux用于应用的状态管理
    //
    // B. 使用Redux时需要先引入React依赖
    //
    // C. Reducer中不能做异步操作
    //
    // D. Redux store可以从js文件export并在任意位置使用

    return B;
  },



  qn16: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //
    //    ```js
    //    function fn2(){
    //      for(var i=0;i<4;i++){
    //        var timer=setInterval(function(i,timer){
    //          console.log(i);
    //          clearInterval(timer)
    //        },10,i,timer);
    //      }
    //    }
    //    fn2();
    //    ```
    //
    // A. 打印为空
    //
    // B. 0 1 2 3 随机顺序出现, 总个数一致
    //
    // C. 0 1 2 3 0 1 2 3 四个数重复
    //
    // D. 0 1 2 3 3 3 3 重复

    return D;
  },



  qn17: () => {
    // 关于Linux命令, 错误的是:
    //
    // A. grep -C 3 "关键词" 命令可以找到包含"关键词"的行, 以及展示上面3行和下面3行
    //
    // B. cat out.txt | vim 这个命令用管道可以把out.txt中的文本导到vim中编辑
    //
    // C. man <some_command> 可以查看命令的手册, man代表manual
    //
    // D. ls -l命令可以列出文件, 但不包含隐藏文件

    return B;
  },



  qn18: () => {
    // 以下代码片段, 选择它的打印输出 (省略换行)
    //    ```js
    //    const a = [];
    //    for (var i=0; i<10; i++) {
    //      a.push(function() {
    //        return console.log(i);
    //      });
    //    }
    //    a[0]();
    //    a[1]();
    //    ```
    //
    // A. 不打印
    //
    // B. undefined undefined
    //
    // C. 10 10
    //
    // D. 0 1

    return C;
  },



  qn19: () => {
    // 以下哪个不是服务器端渲染SSR的问题:
    //
    // A. 缓存机制复杂
    //
    // B. 搜索引擎不执行JS
    //
    // C. 框架支持不完善
    //
    // D. 性能开销大

    return B;
  },



  qn20: () => {
    // 关于git, 以下命令中只涉及本地仓库的为:
    //
    // A. git push
    //
    // B. git fetch --all
    //
    // C. git branch -l -a
    //
    // D. git reset --hard ORIG_HEAD

    return D;
  },




  /**
   * 统计数组中每个字符串出现次数
   * @param string[] strs: 字符串数组, 例如 ['aa', 'ab', 'ab', 'cc', 'cba']
   * @return {[key: string]: number} 出现次数对象, 例如 { aa: 1, ab: 2, cc: 1, cba: 1 }
   */
  frequencyMap: strs => {
    //TODO your code goes here...
    let obj = {};
    strs.map(item => {
      if(!obj[item]){
        obj[item]=1;
      }else{
        obj[item]+=1;
      }
    })
    return obj;
  },
  /**
   * 请处理给定字符串:
   *   - 去掉无用字符和乱码, 只保留大小写英文字母, 单引号, 和空格
   *   - 把一个或多个连续无用字符和乱码换成一个空格. 注意多个乱码只替换成一个空格
   * @param str: 字符串, 例 "I'm我我我driving是to乱乱Beijing码after breakfast88"
   * @return str: 例 "I'm driving to Beijing after breakfast "
   */
  decode: str => {
    //TODO your code goes here...
    str= str.replace(/[\u4e00-\u9fa5]/g, " ")
    return str;
  },
  /**
   * 会议室, 输入是一个数组, 所有会议的开始和结束时间. 输出一共需要多少个会议室
   * @param meetings: 二维数组, 例 [[10, 20], [20, 30]],
   * @return int: 需要的会议室的个数, 例 1
   * 另一个测试用例: [[10,20], [19,30]] => 2
   */
  minRequiredMeetingsRooms: meetings => {
    //TODO your code goes here...
    if(!meetings.length){
      return 0
    }
    const res = [meetings[0]]
    for(let i = 1; i < meetings.length; i++){
      const startTime = meetings[i][0]
      let flag = false
      for(let j = 0; j< res.length; j++){
        if(startTime >= res[j][1]){
          flag = true
          break
        }
      }
      if(!flag){
        res.push(meetings[i])
      }
    }
    return res.length
  },
  /**
   * 部门安排所有组合
   * @param departments: dict, key是部门名, value是每个部门对应所有员工ID数组
   *   例 {'frontend': [1, 2], 'backend': [3, 4], 'devops': [5]}
   * @param required_department: dict, 该任务需要参与的部门和需要的人数
   *   例 {'frontend': 2, 'backend': 1}
   * @return 所有可能的员工组合, 例 [[1, 2, 3], [1, 2, 4]]. 按员工ID升序排序
   */
  staffCombinations: (department_staff_dict, required_staff) => {
    //TODO your code goes here...
    return null;
  },
  /**
   * 大整数相加. 正常相加会溢出的两个整数, 以字符串方式相加
   * @param num1 加数, 字符串, 例 '123456789123456789'
   * @param num2 加数, 字符串, 例 '987654321987654321'
   * @return 和, 例             '1111111111111111110'
   */
  addStrings: (num1, num2) => {
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
  },
}