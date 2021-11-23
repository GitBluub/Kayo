import { createSlice } from '@reduxjs/toolkit'

export const jwtTokenSlice = createSlice({
  name: 'jwtToken',
  initialState: {
    value: null, // read localState
  },
  reducers: {
    set: (jwtToken, action) => {
      jwtToken.value = action.payload
    },
    unset: (jwtToken) => {
	    jwtToken.value = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { set, unset } = jwtTokenSlice.actions

export default jwtTokenSlice.reducer