import { getGamePagePlayersData } from './game/game'
import { getHomeData } from './home/home'
import { getProPagePlayerData } from './pro/pro'
import { getConsolePagePlayersData } from './console/all'
import { postAddPlayerRequest } from './console/add'
import { postDeletePlayerRequest } from './console/delete'
import { queryPlayerById, postUpdatePlayerDataRequest } from './console/update'
import Notice from './notice'
const API = {
    getHomeData,
    getProPagePlayerData,
    getGamePagePlayersData,
    getConsolePagePlayersData,
    postAddPlayerRequest,
    postDeletePlayerRequest,
    queryPlayerById,
    postUpdatePlayerDataRequest,
    Notice,
}


export default API