import { configureStore, createSlice, Store, Action, ThunkAction } from '@reduxjs/toolkit'

export const store: Store = configureStore({
  reducer: {
    // Test reducer, to be removed
    // When features are added
    test: createSlice({
      name: 'test',
      initialState: { hello: 'world' },
      reducers: {
        helloWorld: (state) => {
          state.hello = 'world'
        }
      }
    }).reducer
  }
})

export type AppDispath = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>