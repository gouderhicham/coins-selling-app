import { router, useLocalSearchParams } from "expo-router";
import { View, Text, Button } from "react-native";
export default function App() {
  const { title } = useLocalSearchParams();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{title}</Text>
      <Text>{title}</Text>
      <Button
        onPress={() => {
          router.push("2");
        }}
        title="click me"
      />
    </View>
  );
}
