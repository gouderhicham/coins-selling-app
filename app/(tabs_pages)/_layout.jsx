import { useState } from "react";
import Tabs from "expo-router/tabs";
import { TouchableOpacity, Text, View } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const TabsLayout = () => {
  const [focusedTab, setFocusedTab] = useState("index");

  const tabScreens = [
    { name: "index", icon: "home", label: "Home" },
    { name: "post", icon: "plus-circle", label: "Post" },
    { name: "notifications", icon: "bell", label: "Notifications" },
    { name: "profile", icon: "account", label: "Profile" },
  ];

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 60,
          flexDirection: "row",
          justifyContent: "space-around", // Evenly spaces the tabs
          alignItems: "center", // Centers the tabs vertically
        },
        tabBarItemStyle: { paddingVertical: 7 },
        tabBarActiveTintColor: "black",
        tabBarButton: (props) => {
          const { onPress } = props;
          const focused = route.name === focusedTab;

          return (
            <TouchableOpacity
              onPress={() => {
                setFocusedTab(route.name);
                onPress();
              }}
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <MaterialCommunityIcons
                  name={
                    tabScreens.find((tab) => tab.name === route.name)?.icon ||
                    "circle"
                  }
                  size={26}
                  color={"black"}
                />
                <Text style={{ fontSize: 12, color: "black" }}>
                  {tabScreens.find((tab) => tab.name === route.name)?.label ||
                    "Tab"}
                </Text>
              </View>
            </TouchableOpacity>
          );
        },
      })}
    >
      {tabScreens.map(({ name }) => (
        <Tabs.Screen key={name} name={name} />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
