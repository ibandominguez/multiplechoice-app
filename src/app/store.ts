import { configureStore, Store, Action, ThunkAction } from '@reduxjs/toolkit'

export const store: Store = configureStore({
  reducer: {}
})

export type AppDispath = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>