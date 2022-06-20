import React from 'react'
import { NavigationContainer, NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native'
import { BottomTabNavigationEventMap, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import GroupsContainer from '../features/groups/GroupsContainer'

const Tab = createBottomTabNavigator()

export type TabProps = {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
  state: TabNavigationState<ParamListBase>
}

export default function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Groups' component={GroupsContainer} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}