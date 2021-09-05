import {ActionTypes} from '../constants/action-types';

const initState = {
    coins: [],
    coin: {}
}
export const coinReducer = (state = initState, action) => {
    switch (action.type) {
        case ActionTypes.SET_COINS:
            return { ...state, coins: action.payload };
        case ActionTypes.SELECTED_COIN:
            return { ...state, coin: action.payload };
        default:
            return state;
    }
}