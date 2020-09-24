import AxiosRequest from 'axios'

// 创建 axios 实例
const Axios = AxiosRequest.create({
    baseURL: '',
    timeout: 5000,
})


export default Axios