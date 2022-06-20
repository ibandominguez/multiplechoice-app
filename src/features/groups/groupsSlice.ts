import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Group {
  id: number
  title: string
}

export interface GroupsState {
  loading: 'idle' | 'loading' | 'failed',
  list: Group[]
}

const initialState: GroupsState = {
  loading: 'idle',
  list: []
}

export const fetchGroups = createAsyncThunk('groups/fetchAll', async () => {
  await setTimeout(() => { }, 250)
  return [
    { id: 1, title: 'GroupOne' },
    { id: 2, title: 'GroupTwo' }
  ]
})

const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    addGroup: (state: GroupsState, action: PayloadAction<Group>) => {
      state.list.push(action.payload)
    },
    updateGroup: (state: GroupsState, action: PayloadAction<Group>) => {
      const groupIndex = state.list.map(group => group.id).indexOf(action.payload.id)

      if (groupIndex !== -1) {
        state.list[groupIndex] = action.payload
      }
    },
    removeGroup: (state: GroupsState, action: PayloadAction<Group>) => {
      const groupIndex = state.list.map(group => group.id).indexOf(action.payload.id)

      if (groupIndex !== -1) {
        state.list.splice(groupIndex, 1)
      }
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<GroupsState>) => {
    builder
      .addCase(fetchGroups.pending, (state: GroupsState) => {
        state.loading = 'loading'
      })
      .addCase(fetchGroups.fulfilled, (state: GroupsState, action: PayloadAction<Group[]>) => {
        state.loading = 'idle'
        state.list = action.payload
      })
      .addCase(fetchGroups.rejected, (state: GroupsState) => {
        state.loading = 'failed'
      })
  }
})

export const { addGroup, updateGroup, removeGroup } = groupsSlice.actions
export default groupsSlice.reducer
