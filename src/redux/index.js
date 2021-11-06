import {authActions} from './reducers/authSlice'
import {
    fetchRandomTrack,
    toggleLoading,
    generateNewTrack
} from './reducers/playerSlice'


export default {
    ...authActions, fetchRandomTrack, toggleLoading, generateNewTrack
}