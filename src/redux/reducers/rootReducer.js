import {combineReducers} from '@reduxjs/toolkit'
import authSlice from './authSlice'
import {HYDRATE} from 'next-redux-wrapper'
import playerSlice from './playerSlice'
import modalSlice from './modalSlice'
import searchSlice from './searchSlice'


export const rootReducer = combineReducers({
    auth: authSlice,
    player: playerSlice,
    modal: modalSlice,
    search: searchSlice
})
export const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state.count) nextState.count = state.count // preserve count value on client side navigation
        return nextState
    } else {
        return rootReducer(state, action)
    }
}