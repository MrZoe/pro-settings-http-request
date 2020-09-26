import Axios from 'axios'
import Notice from './notice'
// 返回错误的处理, vm 是发送请求的 vue 实例
const recordErr = (error, vm, mode = 'post') => {

    let message = ''
    if (mode === 'post') {
        if (error.data) {
            message = error.data.meta.msg
        } else {
            message = error.meta.msg.message || error.meta.msg.msg
        }
        // 弹窗提示
        Notice.notification(vm, {
            title: '请求失败',
            type: 'error',
            message,
        })
    } else if (mode === 'get') {
        if (error.data) {
            message = error.data.meta.msg
        } else {
            message = error.meta.msg.message || error.meta.msg.msg
        }
        // 弹窗提示
        Notice.message(vm, {
            type: 'error',
            message,
        })
    }
}



// 第二种封装 httpRequest 的方式, options 可以用来拓展这个请求的功能, vm 是发送请求的 vue 实例
const postHttp = (url, params, options = {}, vm) => {
    return new Promise((resolve, reject) => {
        let requestParams = {
            method: 'post',
            url,
            data: params,
            baseURL: options.baseURL || Axios.defaults.baseURL,
        }
        // 如果要求了返回值的类型
        if (options.responseType) {
            requestParams.responseType = options.responseType
        }
        // 连接请求和特殊设定
        Object.assign(requestParams, options)
        // 发送请求
        Axios(requestParams).then(
            response => {
                const data = response.data
                // console.log(data)
                let code = data.meta.code
                // 后端返回的 code 不是200, 报错
                if (code !== 200) {
                    recordErr(response, vm, 'post')
                }
                // 返回后端返回的内容
                resolve(data)
            },
            err => {
                // 请求失败
                console.log('error===========')
                recordErr(err, options)
                reject(err)
            },
        )
    })
}

const getHttp = (url, params, options = {}, vm) => {
    return new Promise((resolve, reject) => {
        let requestParams = {
            method: 'get',
            url,
            data: params,
            baseURL: options.baseURL || Axios.defaults.baseURL,
        }
        // 如果要求了返回值的类型
        if (options.responseType) {
            requestParams.responseType = options.responseType
        }
        // 连接请求和特殊设定
        Object.assign(requestParams, options)
        // 发送请求
        Axios(requestParams).then(
            response => {
                const data = response.data
                let code = data.meta.code
                if (code !== 200) {
                    console.log('code !== 200')
                    recordErr(response, vm, 'get')
                }
                // 返回后端返回的内容
                resolve(data)
            },
            err => {
                // 请求失败
                console.log('error===========')
                reject(err)
            },
        )
    })
}


export {
    getHttp,
    postHttp,
}