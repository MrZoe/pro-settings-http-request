import { postHttp } from '../httpRequest'

const getProPagePlayerData = (data, vm) => {
    const response = postHttp('/api/pro/player', data, {}, vm)
    return response
}

export {
    getProPagePlayerData
}