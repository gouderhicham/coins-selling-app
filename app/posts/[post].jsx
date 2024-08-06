import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Post = () => {
    const {post} = useLocalSearchParams(); 
  return (
    <View>
      <Text>Post{post}</Text>
    </View>
  )
}

export default Post