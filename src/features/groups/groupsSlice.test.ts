import groupReducer, {
  Group,
  GroupsState,
  addGroup,
  updateGroup,
  removeGroup
} from './groupsSlice'

describe('groups reducer', () => {
  const initialState: GroupsState = {
    loading: 'idle',
    list: []
  }

  it('should handle initial state', () => {
    expect(groupReducer(undefined, { type: 'unknown' })).toEqual({
      loading: 'idle',
      list: []
    })
  })

  it('should add a Group', () => {
    const group: Group = { id: 1, title: 'MyGroup' }
    const actual = groupReducer(initialState, addGroup(group))
    expect(actual.list.length).toEqual(1)
  })

  it('should update a Group', () => {
    const group: Group = { id: 1, title: 'MyGroup' }
    const updatedGroup: Group = { id: 1, title: 'MyUpdatedGroup' }
    const actual = groupReducer(initialState, addGroup(group))
    expect(actual.list[0].title).toEqual('MyGroup')
    const updated = groupReducer(actual, updateGroup(updatedGroup))
    expect(updated.list[0].title).toEqual('MyUpdatedGroup')
  })

  it('should remove a Group', () => {
    const group: Group = { id: 1, title: 'MyGroup' }
    const actual = groupReducer(initialState, addGroup(group))
    expect(actual.list.length).toEqual(1)
    const updated = groupReducer(actual, removeGroup(group))
    expect(updated.list.length).toEqual(0)
  })
})
