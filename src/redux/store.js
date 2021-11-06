import {configureStore} from '@reduxjs/toolkit'
import {createWrapper} from 'next-redux-wrapper'
import {reducer} from './reducers/rootReducer'


const store = context => configureStore({reducer})

// export an assembled wrapper
export const wrapper = createWrapper(store)