import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  variables: [],
}
export const cssSlice = createSlice({
  name: 'cssStore',
  initialState,
  reducers: {
    setVarCssRule: ( state, { payload } ) => {
      const ruleMap = document.styleSheets[0].cssRules[0].styleMap
      const { name, value } = payload
      const addRule = () => {
        ruleMap.set(name, value)
        state.variables = [
          ...state.variables,
          { name, value }
        ]
      }
      const updateRule = (rule) => {
        ruleMap.set(name, value)
        const indice = state.variables.indexOf(rule)
        state.variables[indice] = { name: rule.name, value }
      }
      
      if( state.variables.length === 0 ){
        addRule()
      }else{
        const found = state.variables.find( rule => {
          if( rule.name === name ){
            updateRule(rule)
            return true
          }
        })
        if( !found ){
          addRule()
        }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setVarCssRule } = cssSlice.actions

export default cssSlice.reducer