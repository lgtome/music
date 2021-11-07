import {authActions} from './reducers/authSlice'
import {modalActions} from './reducers/modalSlice'
import {fetchTrackByArtist} from './reducers/searchSlice'
import {
    fetchRandomTrack,
    toggleLoading,
    generateNewTrack
} from './reducers/playerSlice'


export default {
    ...authActions, ...modalActions,
    fetchRandomTrack, toggleLoading, generateNewTrack, fetchTrackByArtist
}