import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link, router } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>index page</Text>
      <Link href={"users/1"}>Go to user 1</Link>
      <Pressable
        onPress={() => {
          router.push("users/2");
        }}
      >
        <Text>go to users 2</Text>
      </Pressable>
    </View>
  );
};

export default index;
