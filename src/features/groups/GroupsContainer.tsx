import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { TabProps } from '../../app/AppNavigator'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { AppDispatch, RootState } from '../../app/store'
import { fetchGroups, Group } from './groupsSlice'

export default function GroupsContainer(props: TabProps) {
  const dispatch: AppDispatch = useAppDispatch()
  const loading: string = useAppSelector((state: RootState) => state.groups.loading)
  const groups: Group[] = useAppSelector((state: RootState) => state.groups.list)

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(fetchGroups())
    }, 500)
  }, [])

  return (
    <Text style={styles.container}>
      {loading === 'loading' ? 'loading ...' : 'Loaded'}{'\n'}
      GroupsContainer: {groups.length}
    </Text>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, alignContent: 'center', justifyContent: 'center' }
})