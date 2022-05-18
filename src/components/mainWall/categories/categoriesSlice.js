import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: {},
}

export const categoriesSlice = createSlice({
  name: 'categoriesStore',
  initialState,
  reducers: {
    setCategories: ( state, action ) => {
      state.categories = action.payload // categoriesFdb
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCategories } = categoriesSlice.actions

export default categoriesSlice.reducer