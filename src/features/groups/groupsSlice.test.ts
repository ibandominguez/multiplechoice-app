import groupReducer, {
  Group,
  GroupsState,
  addGroup,
  updateGroup,
  removeGroup
} from './groupsSlice';

describe('groups reducer', () => {
  const initialState: GroupsState = {
    loading: 'idle',
    groups: []
  }

  it('should handle initial state', () => {
    expect(groupReducer(undefined, { type: 'unknown' })).toEqual({
      loading: 'idle',
      groups: []
    })
  })

  it('should add a Group', () => {
    const group: Group = { id: 1, title: 'MyGroup' }
    const actual = groupReducer(initialState, addGroup(group))
    expect(actual.groups.length).toEqual(1)
  })

  it('should update a Group', () => {
    const group: Group = { id: 1, title: 'MyGroup' }
    const updatedGroup: Group = { id: 1, title: 'MyUpdatedGroup' }
    const actual = groupReducer(initialState, addGroup(group))
    expect(actual.groups[0].title).toEqual('MyGroup')
    const updated = groupReducer(actual, updateGroup(updatedGroup))
    expect(updated.groups[0].title).toEqual('MyUpdatedGroup')
  })

  it('should remove a Group', () => {
    const group: Group = { id: 1, title: 'MyGroup' }
    const actual = groupReducer(initialState, addGroup(group))
    expect(actual.groups.length).toEqual(1)
    const updated = groupReducer(actual, removeGroup(group))
    expect(updated.groups.length).toEqual(0)
  })
})
