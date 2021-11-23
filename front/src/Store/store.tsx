import { configureStore } from "@reduxjs/toolkit"
import jwtTokenReducer from "./jwtToken/jwtTokenSlice"

export default configureStore({
  reducer: {
    jwtToken: jwtTokenReducer
  },
})