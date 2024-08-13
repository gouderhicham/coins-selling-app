import Stack from "expo-router/stack";

const Layout = () => {
  return (
    <>
      <Stack screenOptions={{ animation: "ios"}}>
        <Stack.Screen options={{ headerShown: false }} name="(tabs_pages)" />
        <Stack.Screen name="[id]" />
        <Stack.Screen name="profile" />
      </Stack>
    </>
  );
};

export default Layout;
