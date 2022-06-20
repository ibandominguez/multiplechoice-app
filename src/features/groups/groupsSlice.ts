import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Group {
  id: number
  title: string
}

export interface GroupsState {
  loading: 'idle' | 'loading' | 'failed',
  groups: Group[]
}

const initialState: GroupsState = {
  loading: 'idle',
  groups: []
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
      state.groups.push(action.payload)
    },
    updateGroup: (state: GroupsState, action: PayloadAction<Group>) => {
      const groupIndex = state.groups.map(group => group.id).indexOf(action.payload.id)

      if (groupIndex !== -1) {
        state.groups[groupIndex] = action.payload
      }
    },
    removeGroup: (state: GroupsState, action: PayloadAction<Group>) => {
      const group = state.groups.find((group: Group) => group.id === action.payload.id)

      if (group) {
        return {
          ...state,
          groups: state.groups.filter((group: Group) => group.id !== action.payload.id)
        }
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
        state.groups = action.payload
      })
      .addCase(fetchGroups.rejected, (state: GroupsState) => {
        state.loading = 'failed'
      })
  }
})

export const { addGroup, updateGroup, removeGroup } = groupsSlice.actions
export default groupsSlice.reducer
