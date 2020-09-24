import { getHttp } from '../httpRequest'

const getConsolePagePlayersData = (params, vm) => {
    const response = getHttp('/api/console/all', params, {}, vm)
    return response
}


export {
    getConsolePagePlayersData,
}