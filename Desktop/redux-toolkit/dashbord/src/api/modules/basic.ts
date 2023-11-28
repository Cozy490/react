
import Abstract from '../require'
// import {
//   AuthLoginType
// } from '../types'
import { Iobject } from '../../utils/commonInterface'

class Basic extends Abstract {
  /**
      * 获取用户信息
      *
      */
  getUserInfo (data: Iobject) {
    return this.getReq({ baseURL: data.baseURL, url: '/voila/v2/who', data })
  }
}

// 单列模式返回对象
let instance
export default (() => {
  if (instance) return instance
  instance = new Basic()
  return instance
})()