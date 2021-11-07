import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import fetchJsonp from 'fetch-jsonp'
import {getRandomTrack} from '../../helpers/getRandomTrack'


const initialState = {
    currentTrack: {}
}

export const fetchTrackByArtist = createAsyncThunk('search/fetchTrackByArtist',
    async (name, {rejectWithValue}) => {
        try {
            const track = name.toString().replace(/' '/g, '_')
            const res = await fetchJsonp(
                `https://api.deezer.com/search/track/&q=${name}&output=jsonp`)
                .then(function (response) {
                    return response.json()
                })
                .then(json => json)
            if (res.error) {
                throw new Error('err')
            }
            return res
        } catch (e) {
            return rejectWithValue(e.message)
        }
    })

const searchSlice = createSlice({
    name: 'search',
    initialState,
    extraReducers: {
        [fetchTrackByArtist.fulfilled]: (state, action) => {
            state.currentTrack = action.payload
        }
    }
})

export default searchSlice.reducer