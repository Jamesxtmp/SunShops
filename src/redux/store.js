import { configureStore } from '@reduxjs/toolkit'

import categoriesReducer from '../components/exponent/categoriesSelectors/categoriesSlice'
import cssReducer from './slicesGeneral/cssMetods'

export const store = configureStore({
  reducer: {
    categoriesReducer,
    cssReducer,
  },
})