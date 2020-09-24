import { postHttp } from '../httpRequest'


const getGamePagePlayersData = (params, vm) => {
    const response = postHttp('/api/player/all', params, {}, vm)
    return response
}



export {
    getGamePagePlayersData,
}
