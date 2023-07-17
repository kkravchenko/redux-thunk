import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import rootReducer from './reducer'

export default configureStore({
  reducer: {
    init: rootReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk }),
})
