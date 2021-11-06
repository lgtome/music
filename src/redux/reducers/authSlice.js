import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    token: ''
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        getToken(state) {
            state.token = '123'
        }
    }
})

export default authSlice.reducer
export const {...authActions} = authSlice.actions