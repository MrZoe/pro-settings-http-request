import { postHttp } from '../httpRequest'

const postDeletePlayerRequest = (data, vm) => {
    const response = postHttp('/api/console/delete', data, {}, vm)
    return response
}


export {
    postDeletePlayerRequest,
}