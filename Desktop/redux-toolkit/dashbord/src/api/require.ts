
import instance from './intercept'
import { AxiosRequest } from './types'
import { Iobject } from '@/utils/commonInterface'
alert(process.env.NODE_ENV)
class Abstract {
    
     protected baseURL: any = process.env.NODE_ENV === 'test'? 'https://user-api.voiladev.xyz/':''
      protected headers: Iobject = {
        ContentType: 'application/json;charset=UTF-8'
      }

      private url = ''
      private apiAxios ({ baseURL = this.baseURL, headers = this.headers, method, url, data, params, responseType }: AxiosRequest): Promise<Iobject> {
        // alert(method)
        //  Object.assign(headers, {

        //    //  token: storage().get('token') || storage('localstorage').get('token'),
        //    //  'x-language': storage('localstorage').get('i18n')
        //  })
        // url解析 暂不用api接口查询字典
        //  const _url = (url as string).split('.')
        //  url = getUrl(_url[0], _url[1])
        //  console.log(_url[0], '2222', _url[1])
        //  alert(url)
        if (method === 'GET') {
          // url = `${url}?${qs.stringify(data)}`
          url = `${url}`
        }
        return new Promise((resolve, reject) => {
          instance({
            baseURL,
            headers,
            method,
            url,
            params,
            data,
            responseType
          }).then((res:any) => {
            if (res.status === 200) {
              resolve(res.data)
            } else {
              resolve(res.data)
            }
          }).catch((err:any) => {
            reject(err)
          })
        })
      }

      /**
      * GET类型的网络请求
      */
      protected getReq ({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: 'GET', url, data, params, responseType })
      }

      /**
      * POST类型的网络请求
      */
      protected postReq ({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: 'POST', url, data, params, responseType })
      }

      /**
      * PUT类型的网络请求
      */
      protected putReq ({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: 'PUT', url, data, params, responseType })
      }

      /**
      * DELETE类型的网络请求
      */
      protected deleteReq ({ baseURL, headers, url, data, params, responseType }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: 'DELETE', url, data, params, responseType })
      }

      /**
      * POST导出
      */
      protected exportReq ({ baseURL, headers, url, data, params }: AxiosRequest) {
        return this.apiAxios({ baseURL, headers, method: 'POST', url, data, params, responseType: 'blob' })
      }
}

export default Abstract
