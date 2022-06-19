import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

function ExampleOne(): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>One!</Text>
    </View>
  )
}

function ExampleTwo(): JSX.Element {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Two!</Text>
    </View>
  )
}

const Tab = createBottomTabNavigator()

export default function AppNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='ExampleOne' component={ExampleOne} />
        <Tab.Screen name='ExampleTwo' component={ExampleTwo} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}