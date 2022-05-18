import { configureStore } from '@reduxjs/toolkit'

import categoriesReducer from './../components/mainWall/categories/categoriesSlice'

export const store = configureStore({
  reducer: {
    categoriesReducer,
  },
})