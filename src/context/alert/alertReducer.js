import {SET_ALERT,REMOVE_ALERT} from '../types'
export default(state,action)=>{
    switch (action.type) {
        case SET_ALERT:
            return action.payload
            break;
        case REMOVE_ALERT:
            return null
            break;
        default:
            return state;
    }
}