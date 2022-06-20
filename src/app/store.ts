import { configureStore, createSlice, Store, Action, ThunkAction } from '@reduxjs/toolkit'
import groupsReducer from '../features/groups/groupsSlice'

export const store: Store = configureStore({
  reducer: {
    groups: groupsReducer
  }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>