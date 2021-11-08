import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import fetchJsonp from 'fetch-jsonp'


const initialState = {
    currentTrack: {},
    isLoading: false,
    error: {
        flag: false,
        message: ''
    }
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
        [fetchTrackByArtist.pending]: (state, action) => {
            state.isLoading = true
        },
        [fetchTrackByArtist.fulfilled]: (state, action) => {
            state.currentTrack = action.payload
            state.isLoading = false
        },
        [fetchTrackByArtist.rejected]: (state, action) => {
            state.isLoading = false
            state.error.flag = true
            state.error.message = action.payload
        }
    }
})

export default searchSlice.reducer