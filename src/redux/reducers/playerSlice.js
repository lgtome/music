import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {getRandomTrack} from '../../helpers/getRandomTrack'
import fetchJsonp from 'fetch-jsonp'
import axios from 'axios'


const initialState = {
    track: '',
    duration: 0,
    name: '',
    albumCover: 'https://via.placeholder.com/150',
    preview: 'init',
    isError: true,
    isLoading: true
}

export const fetchRandomTrack = createAsyncThunk('player/fetchRandomTrack',
    async (_, {rejectWithValue, getState}) => {
        try {
            const res = await fetchJsonp(
                `https://api.deezer.com/track/${getRandomTrack()}&output=jsonp`)
                .then(function (response) {
                    return response.json()
                })
                .then(json => json)
            if (res.error) {
                // console.log(res.error.code, 'worked!')
                throw new Error('err')
            }
            return res
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })


const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        toggleLoading(state) {
            state.isLoading = !state.isLoading
        },
        generateNewTrack(state) {
            state.preview = ''
        }
    },
    extraReducers: {
        [fetchRandomTrack.pending]: (state) => {
            state.isLoading = true
        },
        [fetchRandomTrack.fulfilled]: (state, action) => {
            state.preview = action.payload.preview
            state.track = action.payload.title
            state.name = action.payload.artist.name
            state.albumCover = action.payload.album.cover
            state.duration = 30
            state.isError = false
            state.isLoading = false
        },
        [fetchRandomTrack.rejected]: (state) => {
            state.isError = true
        }
    }
})

export default playerSlice.reducer
export const {toggleLoading, generateNewTrack} = playerSlice.actions