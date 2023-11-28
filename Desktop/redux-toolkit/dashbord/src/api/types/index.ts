import { Iobject } from '../../utils/commonInterface'
export * from './basic'
export * from './order'

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
export type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream'

export interface AxiosRequest {
    baseURL?: string;
    url: string;
    data?: Iobject;
    params?: Iobject;
    method?: Method;
    headers?: Iobject;
    timeout?: number;
    responseType?: ResponseType;
}

export interface AxiosResponse {
    data: Iobject;
    headers: Iobject;
    request?: Iobject;
    status: number;
    statusText: string;
    config: AxiosRequest;
}

export interface CustomResponse {
    readonly status: boolean;
    readonly message: string;
    data: Iobject;
    origin?: any;
}
