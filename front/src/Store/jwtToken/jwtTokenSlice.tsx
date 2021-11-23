import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const jwtTokenSlice = createSlice({
  name: 'jwtToken',
  initialState: {
    value: null, // read localState
  },
  reducers: {
    setToken: (jwtToken, action) => {
      jwtToken.value = action.payload
      axios.defaults.headers.common['Authorization'] = `Bearer ${jwtToken.value}`
    },
    unset: (jwtToken) => {
	    jwtToken.value = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken, unset } = jwtTokenSlice.actions

export default jwtTokenSlice.reducer