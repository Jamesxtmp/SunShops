import { configureStore } from '@reduxjs/toolkit'

import categoriesReducer from '../components/exponent/categoriesSelectors/categoriesSlice'

export const store = configureStore({
  reducer: {
    categoriesReducer,
  },
})