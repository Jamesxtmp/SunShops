import { configureStore } from '@reduxjs/toolkit'

import categoriesReducer from '../components/shopIndex/header/categories/categoriesSlice'

export const store = configureStore({
  reducer: {
    categoriesReducer,
  },
})