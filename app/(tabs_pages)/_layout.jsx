import React, { useState, useCallback } from "react";
import Tabs from "expo-router/tabs";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import TabImage from "../../components/Image";
import HeaderComponent from "../../components/Header";

const TabsLayout = () => {
  const [focusedTab, setFocusedTab] = useState("index");
  const tabScreens = [
    { name: "index", icon: "home", label: "Home" },
    { name: "post", icon: "plus", label: "Post" },
    { name: "transactions", icon: "transactions", label: "Transactions" },
    { name: "notifications", icon: "notifications", label: "Notifications" },
  ];
  return (
    <Tabs
      screenOptions={({ route }) => ({ 
        tabBarStyle: {
          height: 58,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        },
        tabBarActiveTintColor: "black",
        tabBarButton: (props) => {
          const { onPress } = props;
          const focused = route.name === focusedTab;

          // Shared values for scale and color
          const backgroundColor = useSharedValue("hsl(0, 0%, 100%)"); // Initial background color

          const animatedStyles = useAnimatedStyle(() => {
            return {
              backgroundColor: backgroundColor.value,
            };
          });

          const handlePressIn = useCallback(() => {
            backgroundColor.value = withTiming("hsl(0, 0%, 80%)", {
              duration: 100,
            }); // Change color on press
          }, []);

          const handlePressOut = useCallback(() => {
            backgroundColor.value = withTiming("hsl(0, 0%, 100%)", {
              duration: 300,
            }); // Reset color
          }, []);

          return (
            <TouchableOpacity
              onPress={() => {
                setFocusedTab(route.name);
                onPress();
              }}
              onPressIn={handlePressIn}
              onPressOut={handlePressOut}
              activeOpacity={1} // keeps the opacity unchanged when pressed
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
                overflow: "hidden",
                paddingTop: 8,
                paddingBottom: 8,
              }}
            >
              <Animated.View
                style={[
                  {
                    ...StyleSheet.absoluteFillObject,
                    backgroundColor: "pink",
                  },
                  animatedStyles,
                ]}
              />
              <View style={{ alignItems: "center" }}>
                <TabImage
                  name={
                    tabScreens.find((tab) => tab.name === route.name)?.icon ||
                    "loading"
                  }
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
      {tabScreens.map(({ name, label }) => (
        <Tabs.Screen
          key={name}
          name={name}
          // initialParams={{ title: label }}
          options={{
            headerShown: true, 
            header: () => <HeaderComponent title={label} />,
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
