import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View>
      <Text>Posts page</Text>
      <Link href={"posts/1"}>go to post number 2</Link>
    </View>
  )
}