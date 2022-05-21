import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  variables: null,
}

export const cssSlice = createSlice({
  name: 'cssStore',
  initialState,
  reducers: {
    setVarCssRule: ( _, { payload } ) => {
        const latstStyleSheet = document.styleSheets[ document.styleSheets.length - 1 ]
        latstStyleSheet.insertRule( ` body{ --${ payload.name }: ${ payload.value } } `, 0 )
    },
  },
})

// Action creators are generated for each case reducer function
export const { setVarCssRule } = cssSlice.actions

export default cssSlice.reducer