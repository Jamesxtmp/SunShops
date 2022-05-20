import { configureStore } from '@reduxjs/toolkit'

import categoriesReducer from '../components/exponent/header/categories/categoriesSlice'

export const store = configureStore({
  reducer: {
    categoriesReducer,
  },
})