import { getHttp } from '../httpRequest'

const getHomeData = (params, vm) => {
    const response = getHttp('/api/home/all', params, {}, vm)
    return response
}


export {
    getHomeData,
}