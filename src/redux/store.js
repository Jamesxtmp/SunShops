import { configureStore } from '@reduxjs/toolkit'

import cssReducer from './slices/cssMetods'
import fireDataReducer from './slices/extractFireData'

export const store = configureStore({
  reducer: {
    cssReducer,
    fireDataReducer,
  },
})