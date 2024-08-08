import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useRef, useCallback, useState } from "react";
import Tabs from "expo-router/tabs";
import { Animated, Easing } from "react-native";

const tabIndexMap = { index: 0, post: 1, notifications: 2, profile: 3 };

const TabsLayout = () => {
  const [focusedTab, setFocusedTab] = useState("index");

  // Initialize animation values for each tab
  const animations = useRef(
    Object.keys(tabIndexMap).reduce((acc, tabName) => {
      acc[tabName] = new Animated.Value(
        tabIndexMap[tabName] === tabIndexMap[focusedTab] ? 1 : 0
      );
      return acc;
    }, {})
  ).current;

  const animateTab = useCallback(
    (tabName) => {
      if (tabName === focusedTab) return; // Prevent animation if the same tab is clicked

      setFocusedTab(tabName); // Update the focused tab state

      Animated.parallel(
        Object.keys(tabIndexMap).map((tab) =>
          Animated.timing(animations[tab], {
            toValue: tab === tabName ? 1 : 0,
            duration: 250,
            easing: Easing.bezier(0, 0, 0.5, 1),
            useNativeDriver: true,
          })
        )
      ).start();
    },
    [focusedTab]
  );

  const getAnimatedStyle = (tabName) => ({
    transform: [
      {
        scale: animations[tabName].interpolate({
          inputRange: [0, 1],
          outputRange: [1, 1.5], // Scale up only the focused tab
        }),
      },
      {
        translateY: animations[tabName].interpolate({
          inputRange: [0, 1],
          outputRange: [0, 5], // Move up only the focused tab
        }),
      },
    ],
  });

  const getAnimatedTextStyle = (tabName) => ({
    opacity: animations[tabName].interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0], // Fade out only the focused tab
    }),
  });

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { height: 60 },
        tabBarItemStyle: { paddingVertical: 7 },
        tabBarActiveTintColor : "black"
      }}
    >
      {Object.entries(tabIndexMap).map(([tabName, index]) => (
        <Tabs.Screen
          key={tabName}
          name={tabName}
          options={{ 
            title: tabName.charAt(0).toUpperCase() + tabName.slice(1),
            tabBarIcon: ({ color }) => {
              const iconName = {
                index: "home",
                post: "plus-circle",
                notifications: "bell",
                // notifications: "bell-badge", on notifications
                profile: "account",
              }[tabName];

              return (
                <Animated.View style={getAnimatedStyle(tabName)}>
                  <MaterialCommunityIcons
                    name={iconName}
                    size={26}
                    color={"black"}
                  />
                </Animated.View>
              );
            },
            tabBarLabel: () => (
              <Animated.Text
                style={[
                  { fontSize: 12, color: "black" },
                  getAnimatedTextStyle(tabName),
                ]}
              >
                {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
              </Animated.Text>
            ),
          }}
          listeners={{
            tabPress: () => animateTab(tabName),
          }}
        />
      ))}
    </Tabs>
  );
};
export default TabsLayout;
