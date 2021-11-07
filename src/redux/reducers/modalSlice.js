import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    isOpen: false
}
const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal(state) {
            state.isOpen = !state.isOpen
        }
    }
})

export default modalSlice.reducer
export const {...modalActions} = modalSlice.actions