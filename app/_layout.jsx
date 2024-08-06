import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
const Layout = () => {
  return (
    <View>
      <Stack>
        <Stack.Screen name="index" options={{ headerTitle: "index" }} />
        <Stack.Screen name="users" options={{ headerTitle: "index" }} />
        <Stack.Screen name="posts" options={{ headerTitle: "index" }} />
      </Stack>
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({});
