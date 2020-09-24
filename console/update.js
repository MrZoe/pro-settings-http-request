import { postHttp } from '../httpRequest'

const queryPlayerById = (data, vm) => {
    const response = postHttp('/api/console/find', data, {}, vm)
    return response
}


const postUpdatePlayerDataRequest = (data, vm) => {
    const response = postHttp('/api/console/update', data, {}, vm)
    return response
}


export {
    queryPlayerById,
    postUpdatePlayerDataRequest,
}