import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{animation: "slide_from_left",}}>
      <Stack.Screen options={{headerShown: false,}} name="(tabs_pages)"/>
      <Stack.Screen options={{}} name="users/[id]" />
    </Stack>
  );
};

export default Layout;
