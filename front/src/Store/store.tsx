import { configureStore } from "@reduxjs/toolkit"
import jwtTokenReducer from "./jwtToken/jwtTokenSlice"

/**
 * Stor for the app
 */
export const store = configureStore({
  reducer: {
    jwtToken: jwtTokenReducer
  },
})

export type RootState = ReturnType<typeof store.getState>