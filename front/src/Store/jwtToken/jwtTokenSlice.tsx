import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies();

/**
 * Jwt token slice
 */
export const jwtTokenSlice = createSlice({
  name: 'jwtToken',
  initialState: {
    value: cookies.get('kayo'),
  },
  reducers: {
    setToken: (jwtToken, action) => {
      jwtToken.value = action.payload
      cookies.set('kayo', jwtToken.value, {sameSite: 'lax'})
    },
    unsetToken: (jwtToken) => {
	    jwtToken.value = null
      cookies.remove('kayo')
    },
  },
})

// Action creators are generated for each case reducer function
export const { setToken, unsetToken } = jwtTokenSlice.actions

export default jwtTokenSlice.reducer