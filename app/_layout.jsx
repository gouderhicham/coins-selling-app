import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
const Layout = () => {
  return (
    <View>
      <Stack>
        <Stack.Screen name='index' /> 
        <Stack.Screen name='users' /> 
        <Stack.Screen name='posts' /> 
      </Stack>
    </View>
  )
}

export default Layout

const styles = StyleSheet.create({})