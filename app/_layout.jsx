import React from "react";
import Stack from "expo-router/stack";

const Layout = () => {
  return (
    <Stack screenOptions={{ animation: "slide_from_right" }}>
      <Stack.Screen options={{ headerShown: false }} name="(tabs_pages)" />
      <Stack.Screen options={{}} name="users/[id]" />
    </Stack>
  );
};

export default Layout;
