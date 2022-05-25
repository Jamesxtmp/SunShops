import { createSlice } from "@reduxjs/toolkit"

import { getDatabase, ref, onValue} from "firebase/database"

const initialState = {}
export const extractFireDataSlice = createSlice({
    name: 'extractFireDataSlice',
    initialState,
    reducers: {
        modifyData: ( _, { payload } ) => {
            return { ...payload }
        }
    }
})
export const { modifyData } = extractFireDataSlice.actions

export const extractData = ( userName ) => (dispatch) => {
    const db = getDatabase()
    const extractDataRef = ref( db, `users/${userName}` )
    onValue(extractDataRef, ( snapshot ) => {
        const data = snapshot.val()
        dispatch( modifyData( data ) )
    })
}

export default extractFireDataSlice.reducer