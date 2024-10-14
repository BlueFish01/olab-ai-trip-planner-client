import { configureStore } from '@reduxjs/toolkit'
import tripReducer from './features/trip/tripSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        trip: tripReducer,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']