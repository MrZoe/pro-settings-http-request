import { postHttp } from '../httpRequest'

const postAddPlayerRequest = (data, vm) => {
    const response = postHttp('/api/console/add', data, {}, vm)
    return response
}


export {
    postAddPlayerRequest,
}